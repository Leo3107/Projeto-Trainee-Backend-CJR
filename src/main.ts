import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://172.29.38.217:3000', // Ou use '*' para permitir qualquer origem
    methods: 'GET,POST,PUT,DELETE,PATCH', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
  });

  await app.listen(8000);
}
bootstrap();
