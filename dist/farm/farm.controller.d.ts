import { FarmService } from './farm.service';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { FarmSchema } from './entities/farm.entity';
export declare class FarmController {
    private readonly farmerService;
    constructor(farmerService: FarmService);
    createFarm(createFarmerDto: CreateFarmDto): Promise<FarmSchema>;
    getFarmsList(page?: number, limit?: number): Promise<{
        data: FarmSchema[];
        total: number;
        currentPage: number;
        totalPages: number;
    }>;
    getFarmId(id: number): Promise<FarmSchema>;
    updateFarm(id: number, updateFarmerDto: UpdateFarmDto): Promise<FarmSchema>;
    removeFarm(id: number): Promise<void>;
}
