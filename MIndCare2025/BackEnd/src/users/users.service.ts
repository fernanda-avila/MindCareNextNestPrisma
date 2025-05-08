import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Usuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Função para criar um usuário
  async createUsuario(data: { nomeCompleto: string; email: string; senha: string }): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(data.senha, 10);  // Criptografando a senha

    // Criando a pessoa primeiro
    const pessoa = await this.prisma.pessoa.create({
      data: {
        nomeCompleto: data.nomeCompleto,
        email: data.email,
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


  async getUsuarios(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany({
      include: { pessoa: true }, 
    });
  }
}
