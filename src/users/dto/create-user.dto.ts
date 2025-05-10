import { IsString, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsString({ message: 'El name debe ser un texto' })
    name: string;
  
    @IsString({ message: 'La password debe ser un texto' })
    password: string;
  
    @IsEmail({}, { message: 'El email debe tener un formato válido' })
    email: string;
  }
