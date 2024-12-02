import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //set del prefijo
  //app.setGlobalPrefix('api');

  //habilitamos validaciones
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }));

  const config = new DocumentBuilder()
                .setTitle('Students API')
                .setDescription('Student CRUD')
                .setVersion('1.0')
                .addTag('students')
                .build();
  const documentFactory = ()=> SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
