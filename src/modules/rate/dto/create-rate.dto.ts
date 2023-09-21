import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateRateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  rate: number; 
}
