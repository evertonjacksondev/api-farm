import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  Get,
  Res,
  Query,
} from '@nestjs/common';
import { FarmService } from './farm.service';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { FarmSchema } from './entities/farm.entity';

@Controller('/v1/farm')
export class FarmController {
  constructor(private readonly farmerService: FarmService) {}

  @Post('/')
  async createFarm(
    @Body() createFarmerDto: CreateFarmDto,
  ): Promise<FarmSchema> {
    try {
      return this.farmerService.createFarm(createFarmerDto);
    } catch (error) {
      return error;
    }
  }
  @Get('/list')
  async getFarmsList(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<{
    data: FarmSchema[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    return await this.farmerService.getFarmsList(page, limit);
  }

  @Get('/:id')
  async getFarmId(@Param('id', ParseIntPipe) id: number) {
    return await this.farmerService.getFarmId(id);
  }

  @Put(':id')
  async updateFarm(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFarmerDto: UpdateFarmDto,
  ): Promise<FarmSchema> {
    try {
      return this.farmerService.updateFarm(id, updateFarmerDto);
    } catch (error) {
      return error;
    }
  }
  @Delete(':id')
  async removeFarm(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.farmerService.removeFarm(id);
  }
}
