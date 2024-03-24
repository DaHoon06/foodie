import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from '@filters/http-exception.filter';
import { LoggingInterceptor } from '@interceptors/logger.interceptor';
import { TimeoutInterceptor } from '@interceptors/time-out.interceptor';
import { ResponseInterceptor } from '@interceptors/response.interceptor';
import * as cookieParser from 'cookie-parser';
import { setupSwagger } from '@config/swagger';

const PORT = 4800;
const HTTP_DOMAIN = 'http://localhost:4888';

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
    origin: [HTTP_DOMAIN],
    credentials: true,
  });

  setupSwagger(app);

  console.log(`Server listen to Port ${PORT}`);
  await app.listen(PORT);
}

bootstrap();
