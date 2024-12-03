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
exports.ProducerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producer_entity_1 = require("./entities/producer.entity");
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
let ProducerService = class ProducerService {
    constructor(producerRepository, farmRepository) {
        this.producerRepository = producerRepository;
        this.farmRepository = farmRepository;
    }
    async getProducerId(id) {
        const producer = await this.producerRepository.findOne({ where: { id } });
        if (!producer) {
            throw new common_1.NotFoundException(`Produtor com ID ${id} nao foi enconstrado.`);
        }
        return producer;
    }
    async getProducerList(page, limit) {
        const [data, total] = await this.producerRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
        });
        return {
            data,
            total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
        };
    }
    async createProducer(createProducerDto) {
        const { document } = createProducerDto;
        if (!this.isValidCpfCnpj(document)) {
            throw new common_1.BadRequestException('CPF ou CNPJ inválido');
        }
        const producerExists = await this.producerRepository.findOne({
            where: { document },
        });
        if (producerExists) {
            throw new common_1.NotFoundException(`Produtor com Documento ${document} ja foi cadastrado.`);
        }
        const producer = this.producerRepository.create(createProducerDto);
        return this.producerRepository.save(producer);
    }
    async updateProducer(id, updateProducerDto) {
        const producer = await this.producerRepository.findOne({ where: { id } });
        if (!producer) {
            throw new common_1.NotFoundException('Não foi possivel atualizar o Produtor, ID não encontrado');
        }
        const updatedProducer = Object.assign(producer, updateProducerDto);
        return this.producerRepository.save(updatedProducer);
    }
    async remove(id) {
        try {
            const producer = await this.producerRepository.findOne({ where: { id } });
            if (!producer) {
                throw new common_1.NotFoundException('Produtor não encontrado');
            }
            await this.producerRepository.remove(producer);
        }
        catch (error) {
            console.error('Erro ao remover o produtor:', error);
            throw new common_1.InternalServerErrorException('Erro ao remover o produtor');
        }
    }
    isValidCpfCnpj(cpfCnpj) {
        const cleanedCpfCnpj = cpfCnpj.replace(/[^\d]+/g, '');
        if (cleanedCpfCnpj.length === 11) {
            return cpf_cnpj_validator_1.cpf.isValid(cleanedCpfCnpj);
        }
        else if (cleanedCpfCnpj.length === 14) {
            return cpf_cnpj_validator_1.cnpj.isValid(cleanedCpfCnpj);
        }
        else {
            return false;
        }
    }
};
exports.ProducerService = ProducerService;
exports.ProducerService = ProducerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producer_entity_1.ProducerSchema)),
    __param(1, (0, typeorm_1.InjectRepository)(producer_entity_1.ProducerSchema)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProducerService);
//# sourceMappingURL=producer.service.js.map