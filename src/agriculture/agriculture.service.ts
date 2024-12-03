import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgricultureSchema } from './entities/agriculture.entity';
import { CreateAgricultureDto } from './dto/create-agriculture.dto';
import { UpdateAgricultureDto } from './dto/update-agriculture.dto';
import { FarmSchema } from '../farm/entities/farm.entity';
import { ProducerSchema } from '../producer/entities/producer.entity';

@Injectable()
export class AgricultureService {
  constructor(
    @InjectRepository(AgricultureSchema)
    private readonly agricultureRepository: Repository<AgricultureSchema>,

    @InjectRepository(FarmSchema)
    private readonly farmRepository: Repository<FarmSchema>,
    
    @InjectRepository(ProducerSchema)
    private readonly producerRepository: Repository<ProducerSchema>,
  ) {}

  async getAgricultureId(id: number): Promise<AgricultureSchema> {
    const agriculture = await this.agricultureRepository.findOne({
      where: { id },
      relations: ['farm'],
    });

    if (!agriculture) {
      throw new NotFoundException(`Cultivo com ID ${id} não encontrado.`);
    }
    return agriculture;
  }

  async getAgricultureList(
    page: number,
    limit: number,
  ): Promise<{
    data: AgricultureSchema[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    const [data, total] = await this.agricultureRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['farm','farm.producer'],
    });

    return {
      data,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async createAgriculture(
    createAgricultureDTO: CreateAgricultureDto,
  ): Promise<AgricultureSchema> {
    const farm = await this.farmRepository.findOne({
      where: { id: createAgricultureDTO.farmId },
    });

    if (!farm) {
      throw new NotFoundException(
        `Fazenda com ID ${createAgricultureDTO.farmId} não encontrada.`,
      );
    }

    const agricultureExistsHasFarm = await this.agricultureRepository.findOne({
      where: {
        farm: { id: createAgricultureDTO.farmId },
        name: createAgricultureDTO.name,
      },
    });

    if (agricultureExistsHasFarm) {
      throw new NotFoundException(`Esse cultivo já existe para esta fazenda.`);
    }

    const totalAreaUsed = await this.agricultureRepository
      .createQueryBuilder('agriculture')
      .where('agriculture.farmId = :farmId', {
        farmId: createAgricultureDTO.farmId,
      })
      .select('SUM(agriculture.areaUsed)', 'total')
      .getRawOne();

    const usedArea = totalAreaUsed?.total ?? 0;

    if (usedArea + Number(createAgricultureDTO.areaUsed) > farm.arable) {
      throw new NotFoundException(
        `Não é possível realizar o plantio, excedeu o limite agricultável.`,
      );
    }

    const agriculture = this.agricultureRepository.create({
      ...createAgricultureDTO,
      farm: farm,
    });

    return this.agricultureRepository.save(agriculture);
  }

  async remove(id: number): Promise<void> {
    const agriculture = await this.agricultureRepository.findOne({
      where: { id },
    });
    if (!agriculture) {
      throw new NotFoundException('Produtor não encontrado');
    }
    await this.agricultureRepository.remove(agriculture);
  }

  async updateAgriculture(
    id: number,
    updateAgricultureDto: UpdateAgricultureDto,
  ): Promise<AgricultureSchema> {
    const farm = await this.farmRepository.findOne({
      where: { id: updateAgricultureDto.farmId },
    });

    if (!farm) {
      throw new NotFoundException(
        `Fazenda com ID ${updateAgricultureDto.farmId} não encontrada.`,
      );
    }

    await this.isExceededAgriculturalLimit(
      updateAgricultureDto.farmId,
      updateAgricultureDto.areaUsed,
      id,
    );

    const agriculture = await this.agricultureRepository.preload({
      id,
      ...updateAgricultureDto,
      farm,
    });

    if (!agriculture) {
      throw new NotFoundException(`Agricultura com ID ${id} não encontrada.`);
    }

    return this.agricultureRepository.save(agriculture);
  }

  async isExceededAgriculturalLimit(
    farmId: number,
    areaUsed: number,
    culturaId: number,
  ): Promise<boolean> {
    const farm = await this.farmRepository.findOne({
      where: { id: farmId },
    });

    if (!farm) {
      throw new NotFoundException(`Fazenda com ID ${farmId} não encontrada.`);
    }

    const totalAreaUsed = await this.agricultureRepository
      .createQueryBuilder('agriculture')
      .where('agriculture.farmId = :farmId', { farmId })
      .andWhere('agriculture.id != :culturaId', { culturaId })
      .select('SUM(agriculture.areaUsed)', 'total')
      .getRawOne();

    const usedArea = totalAreaUsed?.total ?? 0;
    if (usedArea + areaUsed > farm.arable) {
      throw new NotFoundException(
        `Não é possível realizar o plantio, excedeu o limite agricultável.`,
      );
    }

    return false;
  }
}
