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
import { CreateProducerDto } from './dto/create-producer.dto';
import { UpdateProducerDto } from './dto/update-producer.dto';
import { ProducerService } from './producer.service';
let ProducerController = class ProducerController {
    producerService;
    constructor(producerService) {
        this.producerService = producerService;
    }
    async getProducerList(page = 1, limit = 10) {
        const payload = await this.producerService.getProducerList(page, limit);
        return payload;
    }
    async createProducer(createProducerDto) {
        return this.producerService.createProducer(createProducerDto);
    }
    async getProducerId(id) {
        return await this.producerService.getProducerId(id);
    }
    async updateProducer(id, updateFarmerDto) {
        return this.producerService.updateProducer(id, updateFarmerDto);
    }
    async removeProducer(id) {
        return this.producerService.remove(id);
    }
};
__decorate([
    Get('/list'),
    __param(0, Query('page', ParseIntPipe)),
    __param(1, Query('limit', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProducerController.prototype, "getProducerList", null);
__decorate([
    Post('/'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateProducerDto]),
    __metadata("design:returntype", Promise)
], ProducerController.prototype, "createProducer", null);
__decorate([
    Get('/:id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProducerController.prototype, "getProducerId", null);
__decorate([
    Put(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateProducerDto]),
    __metadata("design:returntype", Promise)
], ProducerController.prototype, "updateProducer", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProducerController.prototype, "removeProducer", null);
ProducerController = __decorate([
    Controller('/v1/producer'),
    __metadata("design:paramtypes", [ProducerService])
], ProducerController);
export { ProducerController };
//# sourceMappingURL=producer.controller.js.map