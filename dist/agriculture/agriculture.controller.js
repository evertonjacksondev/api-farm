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
exports.AgricultureController = void 0;
const common_1 = require("@nestjs/common");
const agriculture_service_1 = require("./agriculture.service");
const create_agriculture_dto_1 = require("./dto/create-agriculture.dto");
const update_agriculture_dto_1 = require("./dto/update-agriculture.dto");
const class_validator_1 = require("class-validator");
let AgricultureController = class AgricultureController {
    constructor(agricultureService) {
        this.agricultureService = agricultureService;
    }
    async getAgricultureList(page = 1, limit = 10) {
        (0, class_validator_1.isNumber)(page) ? page : (page = 1);
        (0, class_validator_1.isNumber)(limit) ? limit : (limit = 1);
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
exports.AgricultureController = AgricultureController;
__decorate([
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "getAgricultureList", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agriculture_dto_1.CreateAgricultureDto]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "createAgriculture", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "getAgricultureId", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_agriculture_dto_1.UpdateAgricultureDto]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "updateAgriculture", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AgricultureController.prototype, "removeAgriculture", null);
exports.AgricultureController = AgricultureController = __decorate([
    (0, common_1.Controller)('/v1/cultura'),
    __metadata("design:paramtypes", [agriculture_service_1.AgricultureService])
], AgricultureController);
//# sourceMappingURL=agriculture.controller.js.map