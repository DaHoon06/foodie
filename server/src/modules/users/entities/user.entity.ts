import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserType } from '../enum/user.type.enum';

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
}
