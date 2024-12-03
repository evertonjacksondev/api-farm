import { FarmSchema } from '../../farm/entities/farm.entity';
export declare enum Name {
    SOJA = "Soja",
    MILHO = "Milho",
    ALGODAO = "Algod\u00E3o",
    CAFE = "Caf\u00E9",
    CANADEAÇUCAR = "Cana de A\u00E7\u00FAcar"
}
export declare class AgricultureSchema {
    id: number;
    name: string;
    areaUsed: number;
    farm: FarmSchema;
    plantingDate: Date;
    createdAt: Date;
    updatedAt: Date;
}
