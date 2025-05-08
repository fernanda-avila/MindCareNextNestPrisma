import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Usuario } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<Usuario | null> {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { email },
      include: {
        usuarios: true,
      },
    });

    if (!pessoa || pessoa.usuarios.length === 0) {
      return null;
    }

    const usuario = pessoa.usuarios[0];
    const passwordIsValid = await bcrypt.compare(password, usuario.senha);

    if (passwordIsValid) {
      return usuario;
    }
    return null;
  }

  async login(user: Usuario) {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { id: user.pessoaId },
    });

    if (!pessoa) {
      throw new UnauthorizedException('Pessoa não encontrada');
    }

    const payload = { username: pessoa.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Melhorando o tipo de user e tratando o caso de email duplicado
  async register(user: { nomeCompleto: string; email: string; password: string }) {
    const existingUser = await this.prisma.pessoa.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      throw new UnauthorizedException('Email já registrado');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Criando a pessoa primeiro
    const pessoa = await this.prisma.pessoa.create({
      data: {
        nomeCompleto: user.nomeCompleto,
        email: user.email,
      },
    });

    const newUser = await this.prisma.usuario.create({
      data: {
        pessoaId: pessoa.id,
        senha: hashedPassword,
      },
    });

    return newUser;
  }
}
