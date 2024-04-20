import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from '@common/filters/http-exception.filter';
import { LoggingInterceptor } from '@common/interceptors/logger.interceptor';
import { TimeoutInterceptor } from '@common/interceptors/time-out.interceptor';
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import * as cookieParser from 'cookie-parser';
import { setupSwagger } from '@config/swagger';

const PORT = 4800;
const HTTP_DOMAIN = [
  'http://localhost:3000',
  'https://gofoodie.co.kr',
  'https://www.gofoodie.co.kr',
  'www.gofoodie.co.kr',
  'gofoodie.co.kr',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor(new Logger('NestJS')));
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalInterceptors(new ResponseInterceptor());

  app.use(cookieParser());

  app.enableCors({
    origin: HTTP_DOMAIN,
    credentials: true,
  });

  setupSwagger(app);

  console.log(`Server listen to Port ${PORT}`);
  await app.listen(PORT);
}

bootstrap();
