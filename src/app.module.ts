import { DashboardModule } from './dashboard/dashboard.module';
import { ProducerModule } from './producer/producer.module';
import { FarmModule } from './farm/farm.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturaModule } from './agriculture/agriculture.module';
import { ConfigModule } from '@nestjs/config';
import { AgricultureSchema } from './agriculture/entities/agriculture.entity';
import { ProducerSchema } from './producer/entities/producer.entity';
import { FarmSchema } from './farm/entities/farm.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      entities: [AgricultureSchema,ProducerSchema,FarmSchema],
      synchronize: true,
    }),
    DashboardModule,
    AgriculturaModule,
    ProducerModule,
    FarmModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
