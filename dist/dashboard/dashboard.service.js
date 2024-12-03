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
exports.DashBoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const farm_entity_1 = require("../farm/entities/farm.entity");
const agriculture_entity_1 = require("../agriculture/entities/agriculture.entity");
const producer_entity_1 = require("../producer/entities/producer.entity");
let DashBoardService = class DashBoardService {
    constructor(farmRepository, agricultureRepository, producerRepository) {
        this.farmRepository = farmRepository;
        this.agricultureRepository = agricultureRepository;
        this.producerRepository = producerRepository;
    }
    async getTotalFarms() {
        const total = await this.farmRepository.count();
        return { quantityFarms: total };
    }
    async getTotalArea() {
        const farms = await this.farmRepository.find();
        const totalArea = farms.reduce((acc, farm) => acc + farm.totalArea, 0);
        return { quantityTotalAreaFarms: totalArea };
    }
    async getFarmsByState() {
        const query = await this.farmRepository
            .createQueryBuilder('farm')
            .select('farm.UF, COUNT(*) as Quantity')
            .groupBy('farm.UF')
            .getRawMany();
        return query.map((item) => ({
            ...item,
            quantity: Number(item.quantity),
        }));
    }
    async getFarmsByCulture() {
        const query = await this.agricultureRepository
            .createQueryBuilder('agriculture')
            .select('agriculture.name, COUNT(*) as quantity')
            .groupBy('agriculture.name')
            .getRawMany();
        return query.map((item) => ({
            ...item,
            quantity: Number(item.quantity),
        }));
    }
    async getFarmsByLandUse() {
        const queryAgriculture = await this.agricultureRepository
            .createQueryBuilder('agriculture')
            .select('SUM(agriculture.areaUsed)', 'totalAreaUsed')
            .getRawOne();
        const queryFarm = await this.farmRepository
            .createQueryBuilder('farm')
            .select('SUM(farm.arable)', 'totalArable')
            .getRawOne();
        const totalAreaUsed = Number(queryAgriculture.totalAreaUsed) || 0;
        const totalArable = Number(queryFarm.totalArable) || 0;
        const used = totalAreaUsed;
        const unused = totalArable - totalAreaUsed;
        return [{ used }, { unused }];
    }
    async getAllProducer() {
        const totalProducers = await this.producerRepository.count();
        return { totalProducers };
    }
};
exports.DashBoardService = DashBoardService;
exports.DashBoardService = DashBoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(farm_entity_1.FarmSchema)),
    __param(1, (0, typeorm_1.InjectRepository)(agriculture_entity_1.AgricultureSchema)),
    __param(2, (0, typeorm_1.InjectRepository)(producer_entity_1.ProducerSchema)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], DashBoardService);
//# sourceMappingURL=dashboard.service.js.map