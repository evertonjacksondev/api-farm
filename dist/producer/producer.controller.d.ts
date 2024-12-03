import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { ProducerService } from './producer.service';
import { ProducerSchema } from './entities/producer.entity';
export declare class ProducerController {
    private readonly producerService;
    constructor(producerService: ProducerService);
    getProducerList(page?: number, limit?: number): Promise<{
        data: ProducerSchema[];
        total: number;
        currentPage: number;
        totalPages: number;
    }>;
    createProducer(createProducerDto: CreateProducerDto): Promise<ProducerSchema>;
    getProducerId(id: number): Promise<ProducerSchema>;
    updateProducer(id: number, updateFarmerDto: UpdateProducerDto): Promise<ProducerSchema>;
    removeProducer(id: number): Promise<void>;
}
