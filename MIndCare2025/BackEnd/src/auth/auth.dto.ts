import { IsString, IsEmail, IsNotEmpty, IsBoolean, IsDateString } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  nomeCompleto: string; 

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string; 

  @IsDateString()
  @IsNotEmpty()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsBoolean()
  @IsNotEmpty()
  isAdult: boolean;
}
