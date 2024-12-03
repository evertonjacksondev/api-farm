var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmSchema } from '../farm/entities/farm.entity';
import { FarmModule } from '../farm/farm.module';
import { AgricultureSchema } from './entities/agriculture.entity';
import { ProducerSchema } from '../producer/entities/producer.entity';
import { AgricultureController } from './agriculture.controller';
import { AgricultureService } from './agriculture.service';
import { ProducerModule } from "../producer/producer.module";
let AgriculturaModule = class AgriculturaModule {
};
AgriculturaModule = __decorate([
    Module({
        imports: [
            TypeOrmModule.forFeature([FarmSchema, AgricultureSchema, ProducerSchema]),
            FarmModule,
            AgriculturaModule,
            ProducerModule
        ],
        controllers: [AgricultureController],
        providers: [AgricultureService, AgricultureService],
    })
], AgriculturaModule);
export { AgriculturaModule };
//# sourceMappingURL=agriculture.module.js.map