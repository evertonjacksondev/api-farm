var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ProducerSchema } from '../../producer/entities/producer.entity';
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne, JoinColumn, } from 'typeorm';
let FarmSchema = class FarmSchema {
    id;
    address;
    phone;
    farmName;
    email;
    totalArea;
    arable;
    UF;
    city;
    number;
    neighborhood;
    producer;
    producerId;
    createdAt;
    updatedAt;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FarmSchema.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], FarmSchema.prototype, "address", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], FarmSchema.prototype, "phone", void 0);
__decorate([
    Column({ unique: true }),
    __metadata("design:type", String)
], FarmSchema.prototype, "farmName", void 0);
__decorate([
    Column({ unique: true }),
    __metadata("design:type", String)
], FarmSchema.prototype, "email", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], FarmSchema.prototype, "totalArea", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], FarmSchema.prototype, "arable", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], FarmSchema.prototype, "UF", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], FarmSchema.prototype, "city", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], FarmSchema.prototype, "number", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], FarmSchema.prototype, "neighborhood", void 0);
__decorate([
    ManyToOne(() => ProducerSchema, (producer) => producer.id, {
        onDelete: 'CASCADE',
    }),
    JoinColumn({ name: 'producerId' }),
    __metadata("design:type", ProducerSchema)
], FarmSchema.prototype, "producer", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], FarmSchema.prototype, "producerId", void 0);
__decorate([
    Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], FarmSchema.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], FarmSchema.prototype, "updatedAt", void 0);
FarmSchema = __decorate([
    Entity('')
], FarmSchema);
export { FarmSchema };
//# sourceMappingURL=farm.entity.js.map