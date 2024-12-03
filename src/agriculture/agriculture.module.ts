import { Module } from '@nestjs/common';
import { AgricultureController } from './agriculture.controller';
import { AgricultureService } from './agriculture.service';
import { AgricultureSchema } from './entities/agriculture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmSchema } from '../farm/entities/farm.entity';
import { FarmModule } from '../farm/farm.module';
import { ProducerSchema } from '../producer/entities/producer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FarmSchema, AgricultureSchema,ProducerSchema]),
    FarmModule,
  ],
  controllers: [AgricultureController],
  providers: [AgricultureService, AgricultureService],
})
export class AgriculturaModule {}
