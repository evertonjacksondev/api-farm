import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashBoardService } from './dashboard.service';

import { Module } from '@nestjs/common';
import { FarmSchema } from 'src/farm/entities/farm.entity';
import { AgricultureSchema } from 'src/agriculture/entities/agriculture.entity';
import { ProducerSchema } from 'src/producer/entities/producer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FarmSchema, AgricultureSchema, ProducerSchema]),
  ],
  controllers: [DashboardController],
  providers: [DashBoardService],
})
export class DashboardModule {}
