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
exports.AgricultureSchema = exports.Name = void 0;
const farm_entity_1 = require("../../farm/entities/farm.entity");
const typeorm_1 = require("typeorm");
var Name;
(function (Name) {
    Name["SOJA"] = "Soja";
    Name["MILHO"] = "Milho";
    Name["ALGODAO"] = "Algod\u00E3o";
    Name["CAFE"] = "Caf\u00E9";
    Name["CANADEA\u00C7UCAR"] = "Cana de A\u00E7\u00FAcar";
})(Name || (exports.Name = Name = {}));
let AgricultureSchema = class AgricultureSchema {
};
exports.AgricultureSchema = AgricultureSchema;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AgricultureSchema.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: Name,
    }),
    __metadata("design:type", String)
], AgricultureSchema.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], AgricultureSchema.prototype, "areaUsed", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => farm_entity_1.FarmSchema, (farm) => farm.id, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", farm_entity_1.FarmSchema)
], AgricultureSchema.prototype, "farm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], AgricultureSchema.prototype, "plantingDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], AgricultureSchema.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], AgricultureSchema.prototype, "updatedAt", void 0);
exports.AgricultureSchema = AgricultureSchema = __decorate([
    (0, typeorm_1.Entity)('')
], AgricultureSchema);
//# sourceMappingURL=agriculture.entity.js.map