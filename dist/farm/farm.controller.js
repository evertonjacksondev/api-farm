"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmController = void 0;
const common_1 = require("@nestjs/common");
const farm_service_1 = require("./farm.service");
const create_farm_dto_1 = require("./dto/create-farm.dto");
const update_farm_dto_1 = require("./dto/update-farm.dto");
let FarmController = class FarmController {
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
exports.FarmController = FarmController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_farm_dto_1.CreateFarmDto]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "createFarm", null);
__decorate([
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "getFarmsList", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "getFarmId", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_farm_dto_1.UpdateFarmDto]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "updateFarm", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FarmController.prototype, "removeFarm", null);
exports.FarmController = FarmController = __decorate([
    (0, common_1.Controller)('/v1/farm'),
    __metadata("design:paramtypes", [farm_service_1.FarmService])
], FarmController);
//# sourceMappingURL=farm.controller.js.map