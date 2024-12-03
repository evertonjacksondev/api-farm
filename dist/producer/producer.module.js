"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducerModule = void 0;
const common_1 = require("@nestjs/common");
const producer_controller_1 = require("./producer.controller");
const typeorm_1 = require("@nestjs/typeorm");
const producer_service_1 = require("./producer.service");
const producer_entity_1 = require("./entities/producer.entity");
const agriculture_entity_1 = require("../agriculture/entities/agriculture.entity");
const farm_entity_1 = require("../farm/entities/farm.entity");
let ProducerModule = class ProducerModule {
};
exports.ProducerModule = ProducerModule;
exports.ProducerModule = ProducerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([producer_entity_1.ProducerSchema, agriculture_entity_1.AgricultureSchema, farm_entity_1.FarmSchema])],
        providers: [producer_service_1.ProducerService],
        controllers: [producer_controller_1.ProducerController],
        exports: [typeorm_1.TypeOrmModule],
    })
], ProducerModule);
//# sourceMappingURL=producer.module.js.map