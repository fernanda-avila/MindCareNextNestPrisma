import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {

    const authDto = new AuthDto();
    authDto.nomeCompleto = body.nomeCompleto;
    authDto.email = body.email;
    authDto.password = body.senha; 
    authDto.birthDate = body.birthDate;
    authDto.phone = body.phone;
    authDto.isAdult = body.isAdult;

    
    return this.authService.register(authDto);
  }
}
