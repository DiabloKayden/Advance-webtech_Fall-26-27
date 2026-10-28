import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

async function bootstrap() {
  const databasePath = process.env.DATABASE_PATH || './data/shop.sqlite';
  const absoluteDatabasePath = path.resolve(databasePath);
  fs.mkdirSync(path.dirname(absoluteDatabasePath), { recursive: true });

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  const port = Number(process.env.PORT || 3000);
  await app.listen(port);
  console.log(`Shop API is running at http://localhost:${port}`);
}
bootstrap();
