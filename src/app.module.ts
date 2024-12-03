import { DashboardModule } from './dashboard/dashboard.module';
import { ProducerModule } from './producer/producer.module';
import { FarmModule } from './farm/farm.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgriculturaModule } from './agriculture/agriculture.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }),
    DashboardModule,
    AgriculturaModule,
    ProducerModule,
    FarmModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }



