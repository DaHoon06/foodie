import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsOptional } from 'class-validator';

@Entity()
export class ShopEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  @IsOptional()
  description: string;

  @Column({ nullable: true })
  @IsOptional()
  salesHours: string;

  @Column({ nullable: true })
  @IsOptional()
  dayOff: string;

  @Column()
  fullAddress: string;

  @Column()
  sigungu: string;

  @Column()
  sido: string;

  @Column()
  x: string;

  @Column()
  y: string;

  @Column()
  category: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column({ type: 'boolean', nullable: false })
  deleted: boolean = false;
}
