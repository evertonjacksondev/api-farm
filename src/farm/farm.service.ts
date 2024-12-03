import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FarmSchema } from './entities/farm.entity';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { BadRequestException } from '@nestjs/common';
import { ProducerSchema } from '../producer/entities/producer.entity';

@Injectable()
export class FarmService {
  constructor(
    @InjectRepository(FarmSchema)
    private readonly farmRepository: Repository<FarmSchema>,

    @InjectRepository(ProducerSchema)
    private readonly producerRepository: Repository<ProducerSchema>,
  ) {}

  private validateAreas(farm: CreateFarmDto) {
    const { totalArea, arable } = farm;
    if (Number(arable) > Number(totalArea)) {
      throw new BadRequestException(
        'A área agrícola não pode ser maior que a área total da fazenda.',
      );
    }
  }

  async getFarmId(id: number): Promise<FarmSchema> {
    const farm = await this.farmRepository.findOne({
      where: { id },
      relations: ['producer'],
    });

    if (!farm) {
      throw new NotFoundException(`Fazenda com ID ${id} não encontrado.`);
    }
    return farm;
  }

  async getFarmsList(
    page: number,
    limit: number,
  ): Promise<{
    data: FarmSchema[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    const [data, total] = await this.farmRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['producer'],
    });

    return {
      data,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async createFarm(createFarmDto: CreateFarmDto) {
    this.validateAreas(createFarmDto);

    const producer = await this.producerRepository.findOne({
      where: { id: createFarmDto.producerId },
    });

    if (!producer) {
      throw new NotFoundException(
        `Produtor com ID ${createFarmDto.producerId} não encontrado.`,
      );
    }

    const farmNameExists = await this.farmRepository.findOne({
      where: { farmName: createFarmDto.farmName },
    });

    if (farmNameExists) {
      throw new ConflictException(
        `Já existe uma fazenda com o nome ${createFarmDto.farmName}.`,
      );
    }
    const farmEmail = await this.farmRepository.findOne({
      where: { email: createFarmDto.email },
    });

    if (farmEmail) {
      throw new ConflictException(
        `Já existe uma fazenda com o email ${createFarmDto.email}.`,
      );
    }

    if (!producer) {
      throw new NotFoundException(
        `Produtor com ID ${createFarmDto.producerId} não encontrado.`,
      );
    }

    const farm = this.farmRepository.create({
      ...createFarmDto,
      producer: producer,
    });

    return this.farmRepository.save(farm);
  }

  async updateFarm(
    id: number,
    updateFarmDto: UpdateFarmDto,
  ): Promise<FarmSchema> {
    this.validateAreas(updateFarmDto);
    const farm = await this.farmRepository.findOne({
      where: { id },
    });

    try {
      if (!farm) {
        throw new NotFoundException(`Fazenda com ID ${id} não encontrado.`);
      }
      await this.farmRepository.update(id, updateFarmDto);
    } catch (error) {
      console.log(error);
    }
    return farm;
  }

  async removeFarm(id: number) {
    const farm = await this.farmRepository.findOne({
      where: { id },
    });
    if (!farm) {
      throw new NotFoundException(
        `Produtor rural com ID ${id} não encontrado.`,
      );
    }
    await this.farmRepository.delete(id);
  }
}
