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
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
export class UpdateAgricultureDto {
    name;
    areaUsed;
    farmId;
}
__decorate([
    ApiProperty({
        description: 'Nome da cultura agrícola a ser atualizado',
        example: 'Soja',
    }),
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], UpdateAgricultureDto.prototype, "name", void 0);
__decorate([
    ApiProperty({
        description: 'Nova área utilizada para a plantação (em hectares)',
        example: 75,
    }),
    IsNotEmpty(),
    IsNumber(),
    __metadata("design:type", Number)
], UpdateAgricultureDto.prototype, "areaUsed", void 0);
__decorate([
    ApiProperty({
        description: 'Nova data de plantio',
        example: '2023-11-01T00:00:00.000Z',
    }),
    ApiProperty({
        description: 'ID da fazenda relacionada à cultura',
        example: 456,
    }),
    IsNotEmpty(),
    IsNumber(),
    __metadata("design:type", Number)
], UpdateAgricultureDto.prototype, "farmId", void 0);
//# sourceMappingURL=update-agriculture.dto.js.map