import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponeInterceptor } from './handle/handle.respone';
import { HandleFailedFilter } from './handle/handle.respone.failed';
import { logmiddleware } from './middleware/logger'; 
import { JwtAuthGuard } from './modules/auth/jwtauthgurd';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  app.use(logmiddleware);
  // app.useGlobalGuards(new JwtAuthGuard());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponeInterceptor());
  app.useGlobalFilters(new HandleFailedFilter());
  await app.listen(3000);
}
bootstrap();
