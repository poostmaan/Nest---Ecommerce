import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe({
    whitelist: true, // Ignora los campos extra
    forbidNonWhitelisted: true, // Avisa sobre que hay campos extra
    disableErrorMessages: process.env.ENVIRONMENT == 'production' ? true: false // Establecer las alertas de errores a falso 
    // si el programa ya esta en produccion, de manera que el front-end no se de cuenta de que esta suceciendo 
  }) );
  await app.listen(3000);
}
bootstrap();
