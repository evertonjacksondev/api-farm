import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmService } from './farm.service';
import { ProducerModule } from 'src/producer/producer.module';
import { FarmController } from './farm.controller';
import { FarmSchema } from './entities/farm.entity';
@Module({
  imports: [TypeOrmModule.forFeature([FarmSchema]), ProducerModule],
  providers: [FarmService],
  controllers: [FarmController],
})
export class FarmModule {}
