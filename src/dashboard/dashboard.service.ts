import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FarmSchema } from '../farm/entities/farm.entity';
import { AgricultureSchema } from 'src/agriculture/entities/agriculture.entity';
import { ProducerSchema } from '../producer/entities/producer.entity';

@Injectable()
export class DashBoardService {
  constructor(
    @InjectRepository(FarmSchema)
    private farmRepository: Repository<FarmSchema>,
    @InjectRepository(AgricultureSchema)
    private agricultureRepository: Repository<AgricultureSchema>,
    @InjectRepository(ProducerSchema)
    private producerRepository: Repository<ProducerSchema>,
  ) {}

  async getTotalFarms() {
    const total = await this.farmRepository.count();
    return { quantityFarms: total };
  }

  async getTotalArea() {
    const farms = await this.farmRepository.find();
    const totalArea = farms.reduce((acc, farm) => acc + farm.totalArea, 0);
    return { quantityTotalAreaFarms: totalArea };
  }

  async getFarmsByState() {
    const query = await this.farmRepository
      .createQueryBuilder('farm')
      .select('farm.UF, COUNT(*) as Quantity')
      .groupBy('farm.UF')
      .getRawMany();
    return query.map((item) => ({
      ...item,
      quantity: Number(item.quantity),
    }));
  }

  async getFarmsByCulture() {
    const query = await this.agricultureRepository
      .createQueryBuilder('agriculture')
      .select('agriculture.name, COUNT(*) as quantity')
      .groupBy('agriculture.name')
      .getRawMany();

    return query.map((item) => ({
      ...item,
      quantity: Number(item.quantity),
    }));
  }

  async getFarmsByLandUse(): Promise<any> {
    // Consultando a área usada na agricultura
    const queryAgriculture = await this.agricultureRepository
      .createQueryBuilder('agriculture')
      .select('SUM(agriculture.areaUsed)', 'totalAreaUsed')
      .getRawOne();

    // Consultando a área arável nas fazendas
    const queryFarm = await this.farmRepository
      .createQueryBuilder('farm')
      .select('SUM(farm.arable)', 'totalArable')
      .getRawOne();

    // Convertendo os valores para números e garantindo que não sejam nulos
    const totalAreaUsed = Number(queryAgriculture.totalAreaUsed) || 0;
    const totalArable = Number(queryFarm.totalArable) || 0;

    // Calculando a área utilizada, não utilizada e disponível
    const used = totalAreaUsed;
    const unused = totalArable - totalAreaUsed;

    // Retornando um array de objetos, cada um com uma única propriedade
    return [{ used }, { unused }];
  }

  async getAllProducer() {
    const totalProducers = await this.producerRepository.count();
    return { totalProducers };
  }
}
