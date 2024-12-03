import { FarmSchema } from '../../farm/entities/farm.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

export enum Name {
  SOJA = 'Soja',
  MILHO = 'Milho',
  ALGODAO = 'Algodão',
  CAFE = 'Café',
  CANADEAÇUCAR = 'Cana de Açúcar',
}
@Entity()
export class AgricultureSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: Name,
  })
  name: string;

  @Column({ type: 'float' })
  areaUsed: number;

  @ManyToOne(() => FarmSchema, (farm) => farm.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  farm: FarmSchema;


  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  plantingDate: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
