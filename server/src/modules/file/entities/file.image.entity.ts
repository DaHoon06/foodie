import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class FileImageEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;

  @Column()
  name: string;

  @Column()
  size: string;

  @Column()
  path1: string;

  @Column()
  path2: string;

  @CreateDateColumn()
  created_at: Date;
}
