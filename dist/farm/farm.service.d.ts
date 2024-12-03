import { Repository } from 'typeorm';
import { FarmSchema } from './entities/farm.entity';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { ProducerSchema } from '../producer/entities/producer.entity';
export declare class FarmService {
    private readonly farmRepository;
    private readonly producerRepository;
    constructor(farmRepository: Repository<FarmSchema>, producerRepository: Repository<ProducerSchema>);
    private validateAreas;
    getFarmId(id: number): Promise<FarmSchema>;
    getFarmsList(page: number, limit: number): Promise<{
        data: FarmSchema[];
        total: number;
        currentPage: number;
        totalPages: number;
    }>;
    createFarm(createFarmDto: CreateFarmDto): Promise<FarmSchema>;
    updateFarm(id: number, updateFarmDto: UpdateFarmDto): Promise<FarmSchema>;
    removeFarm(id: number): Promise<void>;
}
