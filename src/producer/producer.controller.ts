import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  Get,
  Query,
} from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ProducerSchema } from './entities/producer.entity';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';

@Controller('/v1/producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Get('/list')
  async getProducerList(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<{
    data: ProducerSchema[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    const payload = await this.producerService.getProducerList(page, limit);
    return payload;
  }

  @Post('/')
  async createProducer(
    @Body() createProducerDto: CreateProducerDto,
  ): Promise<ProducerSchema> {
    return this.producerService.createProducer(createProducerDto);
  }

  @Get('/:id')
  async getProducerId(@Param('id', ParseIntPipe) id: number) {
    return await this.producerService.getProducerId(id);
  }

  @Put(':id')
  async updateProducer(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFarmerDto: UpdateProducerDto,
  ): Promise<ProducerSchema> {
    return this.producerService.updateProducer(id, updateFarmerDto);
  }

  @Delete(':id')
  async removeProducer(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.producerService.remove(id);
  }
}
