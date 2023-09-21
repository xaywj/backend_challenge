import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNumber()
  rate_id: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
