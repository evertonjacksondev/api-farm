var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmService } from './farm.service';
import { ProducerModule } from "../producer/producer.module";
import { FarmController } from './farm.controller';
import { FarmSchema } from './entities/farm.entity';
import { ProducerSchema } from "../producer/entities/producer.entity";
import { AgricultureSchema } from "../agriculture/entities/agriculture.entity";
let FarmModule = class FarmModule {
};
FarmModule = __decorate([
    Module({
        imports: [TypeOrmModule.forFeature([FarmSchema, ProducerSchema, AgricultureSchema]), ProducerModule],
        providers: [FarmService],
        controllers: [FarmController],
    })
], FarmModule);
export { FarmModule };
//# sourceMappingURL=farm.module.js.map