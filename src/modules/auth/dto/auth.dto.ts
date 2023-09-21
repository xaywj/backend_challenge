import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  rate: number; 
}
