import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateRateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  reate: number; 
}
