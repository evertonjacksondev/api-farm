import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationExceptionFilter } from './common/filters/exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });
  app.useGlobalFilters(new ValidationExceptionFilter());
  
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
    const config = new DocumentBuilder()
    .setTitle('API Documentation - Agro Verx')
    .setDescription('API criada para avaliar e demonstrar competências técnicas no desenvolvimento e gerenciamento de serviços backend.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/docs', app, document);
  await app.listen(9000);
}
bootstrap();