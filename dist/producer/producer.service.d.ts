import { Repository } from 'typeorm';
import { ProducerSchema } from './entities/producer.entity';
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { FarmSchema } from '../farm/entities/farm.entity';
export declare class ProducerService {
    private producerRepository;
    private farmRepository;
    constructor(producerRepository: Repository<ProducerSchema>, farmRepository: Repository<FarmSchema>);
    getProducerId(id: number): Promise<ProducerSchema>;
    getProducerList(page: number, limit: number): Promise<{
        data: ProducerSchema[];
        total: number;
        currentPage: number;
        totalPages: number;
    }>;
    createProducer(createProducerDto: CreateProducerDto): Promise<ProducerSchema>;
    updateProducer(id: number, updateProducerDto: UpdateProducerDto): Promise<ProducerSchema & UpdateProducerDto>;
    remove(id: number): Promise<void>;
    private isValidCpfCnpj;
}
