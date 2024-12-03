import { ProducerSchema } from '../../producer/entities/producer.entity';
export declare class FarmSchema {
    id: number;
    address: string;
    phone: string;
    farmName: string;
    email: string;
    totalArea: number;
    arable: number;
    UF: string;
    city: string;
    number: number;
    neighborhood: string;
    producer: ProducerSchema;
    producerId: number;
    createdAt: Date;
    updatedAt: Date;
}
