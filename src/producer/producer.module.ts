import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerSchema } from './entities/producer.entity';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProducerSchema])],
  providers: [ProducerService],
  controllers: [ProducerController],
  exports: [TypeOrmModule],
})
export class ProducerModule {}
