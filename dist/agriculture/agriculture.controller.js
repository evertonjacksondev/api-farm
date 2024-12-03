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
import { AgricultureService } from './agriculture.service';
import { CreateAgricultureDto } from './dto/create-agriculture.dto';
import { UpdateAgricultureDto } from './dto/update-agriculture.dto';
import { isNumber } from 'class-validator';
let AgricultureController = class AgricultureController {
    agricultureService;
    constructor(agricultureService) {
        this.agricultureService = agricultureService;
    }
    async getAgricultureList(page = 1, limit = 10) {
        isNumber(page) ? page : (page = 1);
        isNumber(limit) ? limit : (limit = 1);
        return await this.agricultureService.getAgricultureList(page, limit);
    }
    async createAgriculture(createAgricultureDto) {
        return await this.agricultureService.createAgriculture(createAgricultureDto);
    }
    async getAgricultureId(id) {
        return await this.agricultureService.getAgricultureId(id);
    }
    async updateAgriculture(id, updateFarmerDto) {
        return this.agricultureService.updateAgriculture(id, updateFarmerDto);
    }
    async removeAgriculture(id) {
        return this.agricultureService.remove(id);
    }
};
__decorate([
    Get('/list'),
    __param(0, Query('page', ParseIntPipe)),
    __param(1, Query('limit', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "getAgricultureList", null);
__decorate([
    Post('/'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAgricultureDto]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "createAgriculture", null);
__decorate([
    Get('/:id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "getAgricultureId", null);
__decorate([
    Put(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateAgricultureDto]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "updateAgriculture", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "removeAgriculture", null);
AgricultureController = __decorate([
    Controller('/v1/cultura'),
    __metadata("design:paramtypes", [AgricultureService])
], AgricultureController);
export { AgricultureController };
//# sourceMappingURL=agriculture.controller.js.map