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
exports.CreateAgricultureDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAgricultureDto {
}
exports.CreateAgricultureDto = CreateAgricultureDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome da cultura agrícola',
        example: 'Milho',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAgricultureDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Área utilizada para a plantação (em hectares)',
        example: 50,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAgricultureDto.prototype, "areaUsed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data de plantio',
        example: '2023-10-15T00:00:00.000Z',
    }),
    (0, swagger_1.ApiProperty)({
        description: 'ID da fazenda relacionada',
        example: 123,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAgricultureDto.prototype, "farmId", void 0);
//# sourceMappingURL=create-agriculture.dto.js.map