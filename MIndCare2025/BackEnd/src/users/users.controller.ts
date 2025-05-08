import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(@Body() body: { nomeCompleto: string; email: string; senha: string }) {

    return this.usersService.createUsuario(body);
  }
}
