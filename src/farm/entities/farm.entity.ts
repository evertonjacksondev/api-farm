import { ProducerSchema } from 'src/producer/entities/producer.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('farm_schema')
export class FarmSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  farmName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  totalArea: number;

  @Column()
  arable: number;

  @Column()
  UF: string;

  @Column()
  city: string;

  @Column()
  number: number;

  @Column()
  neighborhood: string;

  @ManyToOne(() => ProducerSchema, (producer) => producer.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'producerId' })
  producer: ProducerSchema;

  @Column()
  producerId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
