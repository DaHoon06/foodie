import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from '../enum/user.type.enum';
import { FileImageEntity } from '@modules/files/entities/file.image.entity';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;

  @Column()
  creatorId: string;

  @Column()
  username: string;

  @Column({ type: String, default: '' })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: String })
  nickname: string;

  @Column({ type: 'enum', enum: UserType, default: UserType.KAKAO })
  type: UserType; // 로그인 타입

  @OneToMany(() => FileImageEntity, (files) => files.user)
  files: FileImageEntity[];
}
