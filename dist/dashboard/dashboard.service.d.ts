import { Repository } from 'typeorm';
import { FarmSchema } from '../farm/entities/farm.entity';
import { AgricultureSchema } from 'src/agriculture/entities/agriculture.entity';
import { ProducerSchema } from '../producer/entities/producer.entity';
export declare class DashBoardService {
    private farmRepository;
    private agricultureRepository;
    private producerRepository;
    constructor(farmRepository: Repository<FarmSchema>, agricultureRepository: Repository<AgricultureSchema>, producerRepository: Repository<ProducerSchema>);
    getTotalFarms(): Promise<{
        quantityFarms: number;
    }>;
    getTotalArea(): Promise<{
        quantityTotalAreaFarms: number;
    }>;
    getFarmsByState(): Promise<any[]>;
    getFarmsByCulture(): Promise<any[]>;
    getFarmsByLandUse(): Promise<any>;
    getAllProducer(): Promise<{
        totalProducers: number;
    }>;
}
