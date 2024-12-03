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
import { IsString, IsNumber, IsNotEmpty, IsEmail } from 'class-validator';
export class UpdateFarmDto {
    producerId;
    address;
    phone;
    email;
    farmName;
    UF;
    city;
    number;
    neighborhood;
    totalArea;
    arable;
}
__decorate([
    ApiProperty({
        description: 'ID do produtor associado à fazenda',
        example: 123,
    }),
    IsNumber(),
    IsNotEmpty(),
    __metadata("design:type", Number)
], UpdateFarmDto.prototype, "producerId", void 0);
__decorate([
    ApiProperty({
        description: 'Endereço completo da fazenda',
        example: 'Rua das Palmeiras, 123',
    }),
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "address", void 0);
__decorate([
    ApiProperty({
        description: 'Número de telefone para contato',
        example: '+55 (11) 98765-4321',
    }),
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "phone", void 0);
__decorate([
    ApiProperty({
        description: 'E-mail de contato da fazenda',
        example: 'fazenda@email.com',
    }),
    IsEmail(),
    IsNotEmpty(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "email", void 0);
__decorate([
    ApiProperty({
        description: 'Nome da fazenda',
        example: 'Fazenda do Sol',
    }),
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "farmName", void 0);
__decorate([
    ApiProperty({
        description: 'Unidade Federativa (UF) onde a fazenda está localizada',
        example: 'SP',
    }),
    IsString(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "UF", void 0);
__decorate([
    ApiProperty({
        description: 'Cidade onde a fazenda está localizada',
        example: 'São Paulo',
    }),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "city", void 0);
__decorate([
    ApiProperty({
        description: 'Número do endereço da fazenda',
        example: 456,
    }),
    IsNotEmpty(),
    IsNumber(),
    __metadata("design:type", Number)
], UpdateFarmDto.prototype, "number", void 0);
__decorate([
    ApiProperty({
        description: 'Bairro onde a fazenda está localizada',
        example: 'Centro',
    }),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "neighborhood", void 0);
__decorate([
    ApiProperty({
        description: 'Área total da fazenda (em hectares)',
        example: 100,
    }),
    IsNumber(),
    IsNotEmpty(),
    __metadata("design:type", Number)
], UpdateFarmDto.prototype, "totalArea", void 0);
__decorate([
    ApiProperty({
        description: 'Área agricultável da fazenda (em hectares)',
        example: 80,
    }),
    IsNumber(),
    IsNotEmpty(),
    __metadata("design:type", Number)
], UpdateFarmDto.prototype, "arable", void 0);
//# sourceMappingURL=update-farm.dto.js.map