var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { FarmSchema } from '../../farm/entities/farm.entity';
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne, } from 'typeorm';
export var Name;
(function (Name) {
    Name["SOJA"] = "Soja";
    Name["MILHO"] = "Milho";
    Name["ALGODAO"] = "Algod\u00E3o";
    Name["CAFE"] = "Caf\u00E9";
    Name["CANADEA\u00C7UCAR"] = "Cana de A\u00E7\u00FAcar";
})(Name || (Name = {}));
let AgricultureSchema = class AgricultureSchema {
    id;
    name;
    areaUsed;
    farm;
    plantingDate;
    createdAt;
    updatedAt;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AgricultureSchema.prototype, "id", void 0);
__decorate([
    Column({
        type: 'enum',
        enum: Name,
    }),
    __metadata("design:type", String)
], AgricultureSchema.prototype, "name", void 0);
__decorate([
    Column({ type: 'float' }),
    __metadata("design:type", Number)
], AgricultureSchema.prototype, "areaUsed", void 0);
__decorate([
    ManyToOne(() => FarmSchema, (farm) => farm.id, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", FarmSchema)
], AgricultureSchema.prototype, "farm", void 0);
__decorate([
    Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], AgricultureSchema.prototype, "plantingDate", void 0);
__decorate([
    Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], AgricultureSchema.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], AgricultureSchema.prototype, "updatedAt", void 0);
AgricultureSchema = __decorate([
    Entity('')
], AgricultureSchema);
export { AgricultureSchema };
//# sourceMappingURL=agriculture.entity.js.map