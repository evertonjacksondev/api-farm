var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Post, Body, Put, Param, Delete, ParseIntPipe, Get, Query, } from '@nestjs/common';
import { FarmService } from './farm.service';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
let FarmController = class FarmController {
    farmerService;
    constructor(farmerService) {
        this.farmerService = farmerService;
    }
    async createFarm(createFarmerDto) {
        try {
            return this.farmerService.createFarm(createFarmerDto);
        }
        catch (error) {
            return error;
        }
    }
    async getFarmsList(page = 1, limit = 10) {
        return await this.farmerService.getFarmsList(page, limit);
    }
    async getFarmId(id) {
        return await this.farmerService.getFarmId(id);
    }
    async updateFarm(id, updateFarmerDto) {
        try {
            return this.farmerService.updateFarm(id, updateFarmerDto);
        }
        catch (error) {
            return error;
        }
    }
    async removeFarm(id) {
        return this.farmerService.removeFarm(id);
    }
};
__decorate([
    Post('/'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFarmDto]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "createFarm", null);
__decorate([
    Get('/list'),
    __param(0, Query('page', ParseIntPipe)),
    __param(1, Query('limit', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "getFarmsList", null);
__decorate([
    Get('/:id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "getFarmId", null);
__decorate([
    Put(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateFarmDto]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "updateFarm", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "removeFarm", null);
FarmController = __decorate([
    Controller('/v1/farm'),
    __metadata("design:paramtypes", [FarmService])
], FarmController);
export { FarmController };
//# sourceMappingURL=farm.controller.js.map