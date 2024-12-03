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
exports.AgricultureService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const agriculture_entity_1 = require("./entities/agriculture.entity");
const farm_entity_1 = require("../farm/entities/farm.entity");
let AgricultureService = class AgricultureService {
    constructor(agricultureRepository, farmRepository) {
        this.agricultureRepository = agricultureRepository;
        this.farmRepository = farmRepository;
    }
    async getAgricultureId(id) {
        const agriculture = await this.agricultureRepository.findOne({
            where: { id },
            relations: ['farm'],
        });
        if (!agriculture) {
            throw new common_1.NotFoundException(`Cultivo com ID ${id} não encontrado.`);
        }
        return agriculture;
    }
    async getAgricultureList(page, limit) {
        const [data, total] = await this.agricultureRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
            relations: ['farm', 'farm.producer'],
        });
        return {
            data,
            total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
        };
    }
    async createAgriculture(createAgricultureDTO) {
        const farm = await this.farmRepository.findOne({
            where: { id: createAgricultureDTO.farmId },
        });
        if (!farm) {
            throw new common_1.NotFoundException(`Fazenda com ID ${createAgricultureDTO.farmId} não encontrada.`);
        }
        const agricultureExistsHasFarm = await this.agricultureRepository.findOne({
            where: {
                farm: { id: createAgricultureDTO.farmId },
                name: createAgricultureDTO.name,
            },
        });
        if (agricultureExistsHasFarm) {
            throw new common_1.NotFoundException(`Esse cultivo já existe para esta fazenda.`);
        }
        const totalAreaUsed = await this.agricultureRepository
            .createQueryBuilder('agriculture')
            .where('agriculture.farmId = :farmId', {
            farmId: createAgricultureDTO.farmId,
        })
            .select('SUM(agriculture.areaUsed)', 'total')
            .getRawOne();
        const usedArea = totalAreaUsed?.total ?? 0;
        if (usedArea + Number(createAgricultureDTO.areaUsed) > farm.arable) {
            throw new common_1.NotFoundException(`Não é possível realizar o plantio, excedeu o limite agricultável.`);
        }
        const agriculture = this.agricultureRepository.create({
            ...createAgricultureDTO,
            farm: farm,
        });
        return this.agricultureRepository.save(agriculture);
    }
    async remove(id) {
        const agriculture = await this.agricultureRepository.findOne({
            where: { id },
        });
        if (!agriculture) {
            throw new common_1.NotFoundException('Produtor não encontrado');
        }
        await this.agricultureRepository.remove(agriculture);
    }
    async updateAgriculture(id, updateAgricultureDto) {
        const farm = await this.farmRepository.findOne({
            where: { id: updateAgricultureDto.farmId },
        });
        if (!farm) {
            throw new common_1.NotFoundException(`Fazenda com ID ${updateAgricultureDto.farmId} não encontrada.`);
        }
        await this.isExceededAgriculturalLimit(updateAgricultureDto.farmId, updateAgricultureDto.areaUsed, id);
        const agriculture = await this.agricultureRepository.preload({
            id,
            ...updateAgricultureDto,
            farm,
        });
        if (!agriculture) {
            throw new common_1.NotFoundException(`Agricultura com ID ${id} não encontrada.`);
        }
        return this.agricultureRepository.save(agriculture);
    }
    async isExceededAgriculturalLimit(farmId, areaUsed, culturaId) {
        const farm = await this.farmRepository.findOne({
            where: { id: farmId },
        });
        if (!farm) {
            throw new common_1.NotFoundException(`Fazenda com ID ${farmId} não encontrada.`);
        }
        const totalAreaUsed = await this.agricultureRepository
            .createQueryBuilder('agriculture')
            .where('agriculture.farmId = :farmId', { farmId })
            .andWhere('agriculture.id != :culturaId', { culturaId })
            .select('SUM(agriculture.areaUsed)', 'total')
            .getRawOne();
        const usedArea = totalAreaUsed?.total ?? 0;
        if (usedArea + areaUsed > farm.arable) {
            throw new common_1.NotFoundException(`Não é possível realizar o plantio, excedeu o limite agricultável.`);
        }
        return false;
    }
};
exports.AgricultureService = AgricultureService;
exports.AgricultureService = AgricultureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(agriculture_entity_1.AgricultureSchema)),
    __param(1, (0, typeorm_1.InjectRepository)(farm_entity_1.FarmSchema)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AgricultureService);
//# sourceMappingURL=agriculture.service.js.map