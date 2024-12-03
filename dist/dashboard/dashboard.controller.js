var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Get } from '@nestjs/common';
import { DashBoardService } from './dashboard.service';
let DashboardController = class DashboardController {
    dashboardService;
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    async getTotalFarms() {
        return this.dashboardService.getTotalFarms();
    }
    async getTotalArea() {
        return this.dashboardService.getTotalArea();
    }
    async getFarmsByState() {
        return this.dashboardService.getFarmsByState();
    }
    async getFarmsByCulture() {
        return this.dashboardService.getFarmsByCulture();
    }
    async getFarmsByLandUse() {
        return this.dashboardService.getFarmsByLandUse();
    }
    async getAllProducer() {
        return this.dashboardService.getAllProducer();
    }
};
__decorate([
    Get('total-farms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getTotalFarms", null);
__decorate([
    Get('total-area'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getTotalArea", null);
__decorate([
    Get('farms-by-state'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getFarmsByState", null);
__decorate([
    Get('farms-by-culture'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getFarmsByCulture", null);
__decorate([
    Get('farms-by-land-use'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getFarmsByLandUse", null);
__decorate([
    Get('total-producer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getAllProducer", null);
DashboardController = __decorate([
    Controller('/v1/dashboard'),
    __metadata("design:paramtypes", [DashBoardService])
], DashboardController);
export { DashboardController };
//# sourceMappingURL=dashboard.controller.js.map