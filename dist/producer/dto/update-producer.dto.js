var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class UpdateProducerDto {
    name;
    document;
    address;
    UF;
    city;
    number;
    neighborhood;
    phone;
}
__decorate([
    ApiProperty({
        description: 'Nome do produtor',
        example: 'João da Silva',
    }),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UpdateProducerDto.prototype, "name", void 0);
__decorate([
    ApiProperty({
        description: 'Documento de identificação do produtor (CPF ou CNPJ)',
        example: '123.456.789-00',
    }),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UpdateProducerDto.prototype, "document", void 0);
__decorate([
    ApiProperty({
        description: 'Endereço do produtor',
        example: 'Rua das Palmeiras, 123',
    }),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UpdateProducerDto.prototype, "address", void 0);
__decorate([
    ApiProperty({
        description: 'Unidade Federativa (UF) do produtor',
        example: 'SP',
    }),
    IsString(),
    __metadata("design:type", String)
], UpdateProducerDto.prototype, "UF", void 0);
__decorate([
    ApiProperty({
        description: 'Cidade onde o produtor está localizado',
        example: 'São Paulo',
    }),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UpdateProducerDto.prototype, "city", void 0);
__decorate([
    ApiProperty({
        description: 'Número do endereço do produtor',
        example: 456,
    }),
    IsNotEmpty(),
    __metadata("design:type", String)
], UpdateProducerDto.prototype, "number", void 0);
__decorate([
    ApiProperty({
        description: 'Bairro onde o produtor está localizado',
        example: 'Centro',
    }),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UpdateProducerDto.prototype, "neighborhood", void 0);
__decorate([
    ApiProperty({
        description: 'Número de telefone do produtor',
        example: '+55 (11) 98765-4321',
    }),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UpdateProducerDto.prototype, "phone", void 0);
//# sourceMappingURL=update-producer.dto.js.map