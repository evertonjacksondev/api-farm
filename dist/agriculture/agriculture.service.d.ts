import { Repository } from 'typeorm';
import { AgricultureSchema } from './entities/agriculture.entity';
import { CreateAgricultureDto } from './dto/create-agriculture.dto';
import { UpdateAgricultureDto } from './dto/update-agriculture.dto';
import { FarmSchema } from '../farm/entities/farm.entity';
import { ProducerSchema } from '../producer/entities/producer.entity';
export declare class AgricultureService {
    private readonly agricultureRepository;
    private readonly farmRepository;
    private readonly producerRepository;
    constructor(agricultureRepository: Repository<AgricultureSchema>, farmRepository: Repository<FarmSchema>, producerRepository: Repository<ProducerSchema>);
    getAgricultureId(id: number): Promise<AgricultureSchema>;
    getAgricultureList(page: number, limit: number): Promise<{
        data: AgricultureSchema[];
        total: number;
        currentPage: number;
        totalPages: number;
    }>;
    createAgriculture(createAgricultureDTO: CreateAgricultureDto): Promise<AgricultureSchema>;
    remove(id: number): Promise<void>;
    updateAgriculture(id: number, updateAgricultureDto: UpdateAgricultureDto): Promise<AgricultureSchema>;
    isExceededAgriculturalLimit(farmId: number, areaUsed: number, culturaId: number): Promise<boolean>;
}
