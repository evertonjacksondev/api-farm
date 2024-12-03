import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerService } from './producer.service';
import { ProducerSchema } from './entities/producer.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ProducerSchema])],
  providers: [ProducerService],
  controllers: [ProducerController],
  exports: [TypeOrmModule],
})
export class ProducerModule {}
