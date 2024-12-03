import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProducerSchema } from './entities/producer.entity';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@Injectable()
export class ProducerService {
  constructor(
    @InjectRepository(ProducerSchema)
    private producerRepository: Repository<ProducerSchema>,

  ) {}

  async getProducerId(id: number) {
    const producer = await this.producerRepository.findOne({ where: { id } });
    if (!producer) {
      throw new NotFoundException(`Produtor com ID ${id} nao foi enconstrado.`);
    }
    return producer;
  }

  async getProducerList(
    page: number,
    limit: number,
  ): Promise<{
    data: ProducerSchema[];
    total: number;
    currentPage: number;
    totalPages: number;
  }> {
    const [data, total] = await this.producerRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async createProducer(createProducerDto: CreateProducerDto) {
    const { document } = createProducerDto;

    if (!this.isValidCpfCnpj(document)) {
      throw new BadRequestException('CPF ou CNPJ inválido');
    }

    const producerExists = await this.producerRepository.findOne({
      where: { document },
    });
    if (producerExists) {
      throw new NotFoundException(
        `Produtor com Documento ${document} ja foi cadastrado.`,
      );
    }
    const producer = this.producerRepository.create(createProducerDto);
    return this.producerRepository.save(producer);
  }

  async updateProducer(id: number, updateProducerDto: UpdateProducerDto) {
    const producer = await this.producerRepository.findOne({ where: { id } });
    if (!producer) {
      throw new NotFoundException(
        'Não foi possivel atualizar o Produtor, ID não encontrado',
      );
    }

    const updatedProducer = Object.assign(producer, updateProducerDto);
    return this.producerRepository.save(updatedProducer);
  }
  async remove(id: number) {
    try {
      const producer = await this.producerRepository.findOne({ where: { id } });
      if (!producer) {
        throw new NotFoundException('Produtor não encontrado');
      }

      await this.producerRepository.remove(producer);
    } catch (error) {
      console.error('Erro ao remover o produtor:', error);
      throw new InternalServerErrorException('Erro ao remover o produtor');
    }
  }

  private isValidCpfCnpj(cpfCnpj: string): boolean {
    const cleanedCpfCnpj = cpfCnpj.replace(/[^\d]+/g, '');

    if (cleanedCpfCnpj.length === 11) {
      return cpf.isValid(cleanedCpfCnpj);
    } else if (cleanedCpfCnpj.length === 14) {
      return cnpj.isValid(cleanedCpfCnpj);
    } else {
      return false;
    }
  }
}
