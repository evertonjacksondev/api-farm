import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerService } from './producer.service';
import { ProducerSchema } from './entities/producer.entity';
import { AgricultureSchema } from 'src/agriculture/entities/agriculture.entity';
import { FarmSchema } from 'src/farm/entities/farm.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ProducerSchema, AgricultureSchema, FarmSchema])],
  providers: [ProducerService],
  controllers: [ProducerController],
  exports: [TypeOrmModule],
})
export class ProducerModule {}
