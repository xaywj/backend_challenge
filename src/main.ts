import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponeInterceptor } from './handle/handle.respone';
import { HandleFailedFilter } from './handle/handle.respone.failed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponeInterceptor());
  app.useGlobalFilters(new HandleFailedFilter());
  await app.listen(3000);
}
bootstrap();
