import { DashBoardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashBoardService);
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
