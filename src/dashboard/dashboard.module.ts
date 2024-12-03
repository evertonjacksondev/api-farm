import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashBoardService } from './dashboard.service';

import { Module } from '@nestjs/common';
import { FarmSchema } from '../farm/entities/farm.entity';
import { AgricultureSchema } from '../agriculture/entities/agriculture.entity';
import { ProducerSchema } from '../producer/entities/producer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FarmSchema, AgricultureSchema, ProducerSchema])],
  controllers: [DashboardController],
  providers: [DashBoardService],
})
export class DashboardModule { }
