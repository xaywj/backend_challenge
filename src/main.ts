import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponeInterceptor } from './handle/handle.respone';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponeInterceptor());

  await app.listen(3000);
}
bootstrap();
