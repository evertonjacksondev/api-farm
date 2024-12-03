import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmService } from './farm.service';
import { FarmController } from './farm.controller';
import { FarmSchema } from './entities/farm.entity';
import { ProducerModule } from '../producer/producer.module';
@Module({
  imports: [TypeOrmModule.forFeature([FarmSchema]), ProducerModule],
  providers: [FarmService],
  controllers: [FarmController],
})
export class FarmModule {}
