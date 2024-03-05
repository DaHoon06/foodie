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
      whitelist: true, // Note: DTO에 정의되지 않은 속성이 들어오면 제거한다.
      forbidNonWhitelisted: true, // Note: DTO에 정의되지 않은 속성이 들어오면 요청을 막는다.
      transform: true, // Note: 요청의 타입을 DTO에 정의된 타입으로 변환한다.
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  // Note: 모든 요청에 대해 로그를 남긴다.
  app.useGlobalInterceptors(new LoggingInterceptor(new Logger('NestJS')));
  // Note: 일정 시간이 지나도록 응답이 없으면 요청을 취소하고 에러를 발생시킨다.
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
