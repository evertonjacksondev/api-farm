import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerSchema } from './entities/producer.entity';
import { ProducerService } from './producer.service';


@Module({
  imports: [TypeOrmModule.forFeature([ProducerSchema])],
  providers: [ProducerService],
  controllers: [ProducerController],
  exports: [TypeOrmModule],
})
export class ProducerModule {}
