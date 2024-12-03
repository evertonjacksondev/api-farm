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
import { Injectable, BadRequestException, NotFoundException, InternalServerErrorException, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProducerSchema } from './entities/producer.entity';
import { cpf, cnpj } from 'cpf-cnpj-validator';
let ProducerService = class ProducerService {
    producerRepository;
    constructor(producerRepository) {
        this.producerRepository = producerRepository;
    }
    async getProducerId(id) {
        const producer = await this.producerRepository.findOne({ where: { id } });
        if (!producer) {
            throw new NotFoundException(`Produtor com ID ${id} nao foi enconstrado.`);
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
            throw new BadRequestException('CPF ou CNPJ inválido');
        }
        const producerExists = await this.producerRepository.findOne({
            where: { document },
        });
        if (producerExists) {
            throw new NotFoundException(`Produtor com Documento ${document} ja foi cadastrado.`);
        }
        const producer = this.producerRepository.create(createProducerDto);
        return this.producerRepository.save(producer);
    }
    async updateProducer(id, updateProducerDto) {
        const producer = await this.producerRepository.findOne({ where: { id } });
        if (!producer) {
            throw new NotFoundException('Não foi possivel atualizar o Produtor, ID não encontrado');
        }
        const updatedProducer = Object.assign(producer, updateProducerDto);
        return this.producerRepository.save(updatedProducer);
    }
    async remove(id) {
        try {
            const producer = await this.producerRepository.findOne({ where: { id } });
            if (!producer) {
                throw new NotFoundException('Produtor não encontrado');
            }
            await this.producerRepository.remove(producer);
        }
        catch (error) {
            console.error('Erro ao remover o produtor:', error);
            throw new InternalServerErrorException('Erro ao remover o produtor');
        }
    }
    isValidCpfCnpj(cpfCnpj) {
        const cleanedCpfCnpj = cpfCnpj.replace(/[^\d]+/g, '');
        if (cleanedCpfCnpj.length === 11) {
            return cpf.isValid(cleanedCpfCnpj);
        }
        else if (cleanedCpfCnpj.length === 14) {
            return cnpj.isValid(cleanedCpfCnpj);
        }
        else {
            return false;
        }
    }
};
ProducerService = __decorate([
    Injectable(),
    __param(0, InjectRepository(ProducerSchema)),
    __metadata("design:paramtypes", [Repository])
], ProducerService);
export { ProducerService };
//# sourceMappingURL=producer.service.js.map