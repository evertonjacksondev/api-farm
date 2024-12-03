import { Controller, Get } from '@nestjs/common';
import { DashBoardService } from './dashboard.service';

@Controller('/v1/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashBoardService) {}

  @Get('total-farms')
  async getTotalFarms() {
    return this.dashboardService.getTotalFarms();
  }

  @Get('total-area')
  async getTotalArea() {
    return this.dashboardService.getTotalArea();
  }

  @Get('farms-by-state')
  async getFarmsByState() {
    return this.dashboardService.getFarmsByState();
  }

  @Get('farms-by-culture')
  async getFarmsByCulture() {
    return this.dashboardService.getFarmsByCulture();
  }

  @Get('farms-by-land-use')
  async getFarmsByLandUse() {
    return this.dashboardService.getFarmsByLandUse();
  }

  @Get('total-producer')
  async getAllProducer() {
    return this.dashboardService.getAllProducer();
  }
}
