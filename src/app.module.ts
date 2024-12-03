import { DashboardModule } from './dashboard/dashboard.module';
import { ProducerModule } from './producer/producer.module';
import { FarmModule } from './farm/farm.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturaModule } from './agriculture/agriculture.module';
import { ConfigModule } from '@nestjs/config';

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
      entities: [__dirname + '/../**/*.entity{.js,.ts}'],
      synchronize: false,
      autoLoadEntities: true,
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
