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
import { AgricultureService } from './agriculture.service';
import { CreateAgricultureDto } from './dto/create-agriculture.dto';
import { UpdateAgricultureDto } from './dto/update-agriculture.dto';
import { AgricultureSchema } from './entities/agriculture.entity';
import { isNumber } from 'class-validator';

@Controller('/v1/cultura')
export class AgricultureController {
  constructor(private readonly agricultureService: AgricultureService) {}

  @Get('/list')
  async getAgricultureList(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<{
    data: AgricultureSchema[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    isNumber(page) ? page : (page = 1);
    isNumber(limit) ? limit : (limit = 1);

    return await this.agricultureService.getAgricultureList(page, limit);
  }
  @Post('/')
  async createAgriculture(
    @Body() createAgricultureDto: CreateAgricultureDto,
  ): Promise<AgricultureSchema> {
    return await this.agricultureService.createAgriculture(
      createAgricultureDto,
    );
  }
  @Get('/:id')
  async getAgricultureId(@Param('id', ParseIntPipe) id: number) {
    return await this.agricultureService.getAgricultureId(id);
  }
  @Put(':id')
  async updateAgriculture(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFarmerDto: UpdateAgricultureDto,
  ): Promise<AgricultureSchema> {
    return this.agricultureService.updateAgriculture(id, updateFarmerDto);
  }
  @Delete(':id')
  async removeAgriculture(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.agricultureService.remove(id);
  }
}
