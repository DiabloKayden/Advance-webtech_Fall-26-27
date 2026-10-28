import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/product.module';
import { EmployeeModule } from './employees/employee.module';
import { Product } from './products/product.entity';
import { Employee } from './employees/employee.entity';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: path.resolve(process.env.DATABASE_PATH || './data/shop.sqlite'),
      entities: [Product, Employee],
      synchronize: true,
    }),
    ProductModule,
    EmployeeModule,
  ],
})
export class AppModule {}
