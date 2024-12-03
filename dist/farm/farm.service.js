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
exports.FarmService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const farm_entity_1 = require("./entities/farm.entity");
const common_2 = require("@nestjs/common");
const producer_entity_1 = require("../producer/entities/producer.entity");
let FarmService = class FarmService {
    constructor(farmRepository, producerRepository) {
        this.farmRepository = farmRepository;
        this.producerRepository = producerRepository;
    }
    validateAreas(farm) {
        const { totalArea, arable } = farm;
        if (Number(arable) > Number(totalArea)) {
            throw new common_2.BadRequestException('A área agrícola não pode ser maior que a área total da fazenda.');
        }
    }
    async getFarmId(id) {
        const farm = await this.farmRepository.findOne({
            where: { id },
            relations: ['producer'],
        });
        if (!farm) {
            throw new common_1.NotFoundException(`Fazenda com ID ${id} não encontrado.`);
        }
        return farm;
    }
    async getFarmsList(page, limit) {
        const [data, total] = await this.farmRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            relations: ['producer'],
        });
        return {
            data,
            total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
        };
    }
    async createFarm(createFarmDto) {
        this.validateAreas(createFarmDto);
        const producer = await this.producerRepository.findOne({
            where: { id: createFarmDto.producerId },
        });
        if (!producer) {
            throw new common_1.NotFoundException(`Produtor com ID ${createFarmDto.producerId} não encontrado.`);
        }
        const farmNameExists = await this.farmRepository.findOne({
            where: { farmName: createFarmDto.farmName },
        });
        if (farmNameExists) {
            throw new common_1.ConflictException(`Já existe uma fazenda com o nome ${createFarmDto.farmName}.`);
        }
        const farmEmail = await this.farmRepository.findOne({
            where: { email: createFarmDto.email },
        });
        if (farmEmail) {
            throw new common_1.ConflictException(`Já existe uma fazenda com o email ${createFarmDto.email}.`);
        }
        if (!producer) {
            throw new common_1.NotFoundException(`Produtor com ID ${createFarmDto.producerId} não encontrado.`);
        }
        const farm = this.farmRepository.create({
            ...createFarmDto,
            producer: producer,
        });
        return this.farmRepository.save(farm);
    }
    async updateFarm(id, updateFarmDto) {
        this.validateAreas(updateFarmDto);
        const farm = await this.farmRepository.findOne({
            where: { id },
        });
        try {
            if (!farm) {
                throw new common_1.NotFoundException(`Fazenda com ID ${id} não encontrado.`);
            }
            await this.farmRepository.update(id, updateFarmDto);
        }
        catch (error) {
            console.log(error);
        }
        return farm;
    }
    async removeFarm(id) {
        const farm = await this.farmRepository.findOne({
            where: { id },
        });
        if (!farm) {
            throw new common_1.NotFoundException(`Produtor rural com ID ${id} não encontrado.`);
        }
        await this.farmRepository.delete(id);
    }
};
exports.FarmService = FarmService;
exports.FarmService = FarmService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(farm_entity_1.FarmSchema)),
    __param(1, (0, typeorm_1.InjectRepository)(producer_entity_1.ProducerSchema)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FarmService);
//# sourceMappingURL=farm.service.js.map