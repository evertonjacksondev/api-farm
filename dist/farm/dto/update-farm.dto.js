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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFarmDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateFarmDto {
}
exports.UpdateFarmDto = UpdateFarmDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do produtor associado à fazenda',
        example: 123,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateFarmDto.prototype, "producerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Endereço completo da fazenda',
        example: 'Rua das Palmeiras, 123',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de telefone para contato',
        example: '+55 (11) 98765-4321',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'E-mail de contato da fazenda',
        example: 'fazenda@email.com',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome da fazenda',
        example: 'Fazenda do Sol',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "farmName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unidade Federativa (UF) onde a fazenda está localizada',
        example: 'SP',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "UF", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cidade onde a fazenda está localizada',
        example: 'São Paulo',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número do endereço da fazenda',
        example: 456,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateFarmDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bairro onde a fazenda está localizada',
        example: 'Centro',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFarmDto.prototype, "neighborhood", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Área total da fazenda (em hectares)',
        example: 100,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateFarmDto.prototype, "totalArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Área agricultável da fazenda (em hectares)',
        example: 80,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateFarmDto.prototype, "arable", void 0);
//# sourceMappingURL=update-farm.dto.js.map