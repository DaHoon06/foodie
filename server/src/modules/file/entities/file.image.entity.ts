import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { FeedEntity } from '@modules/feeds/entities/feed.entity';
import { UserEntity } from '@modules/users/entities/user.entity';

@Entity()
export class FileImageEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;

  @Column()
  originName: string;

  @Column()
  name: string;

  @Column()
  size: number;

  @Column()
  path1: string;

  @Column()
  path2: string;

  @Column()
  type: string;

  @Column()
  fileType: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => FeedEntity)
  @JoinColumn({ name: 'feed_id' })
  feed: FeedEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
