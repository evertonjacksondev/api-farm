import { AgricultureService } from './agriculture.service';
import { CreateAgricultureDto } from './dto/create-agriculture.dto';
import { UpdateAgricultureDto } from './dto/update-agriculture.dto';
import { AgricultureSchema } from './entities/agriculture.entity';
export declare class AgricultureController {
    private readonly agricultureService;
    constructor(agricultureService: AgricultureService);
    getAgricultureList(page?: number, limit?: number): Promise<{
        data: AgricultureSchema[];
        total: number;
        currentPage: number;
        totalPages: number;
    }>;
    createAgriculture(createAgricultureDto: CreateAgricultureDto): Promise<AgricultureSchema>;
    getAgricultureId(id: number): Promise<AgricultureSchema>;
    updateAgriculture(id: number, updateFarmerDto: UpdateAgricultureDto): Promise<AgricultureSchema>;
    removeAgriculture(id: number): Promise<void>;
}
