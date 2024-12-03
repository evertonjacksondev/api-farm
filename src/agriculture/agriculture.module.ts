import { Module } from '@nestjs/common';
import { AgricultureController } from './agriculture.controller';
import { AgricultureService } from './agriculture.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmSchema } from 'src/farm/entities/farm.entity';
import { AgricultureSchema } from './entities/agriculture.entity';
import { ProducerSchema } from 'src/producer/entities/producer.entity';
import { FarmModule } from 'src/farm/farm.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FarmSchema, AgricultureSchema, ProducerSchema]),
    FarmModule,
  ],
  controllers: [AgricultureController],
  providers: [AgricultureService, AgricultureService],
})
export class AgriculturaModule {}
