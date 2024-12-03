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
exports.UpdateAgricultureDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateAgricultureDto {
}
exports.UpdateAgricultureDto = UpdateAgricultureDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome da cultura agrícola a ser atualizado',
        example: 'Soja',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAgricultureDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nova área utilizada para a plantação (em hectares)',
        example: 75,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAgricultureDto.prototype, "areaUsed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nova data de plantio',
        example: '2023-11-01T00:00:00.000Z',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'ID da fazenda relacionada à cultura',
        example: 456,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAgricultureDto.prototype, "farmId", void 0);
//# sourceMappingURL=update-agriculture.dto.js.map