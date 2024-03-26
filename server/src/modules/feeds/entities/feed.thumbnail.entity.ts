import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { FeedEntity } from './feed.entity';
import { UserEntity } from '@modules/users/entities/user.entity';

@Entity()
@Unique('feed_thumbnail_unique', ['feed', 'user'])
export class FeedThumbnailEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;

  @Column()
  filename: string;

  @Column()
  fileId: string;

  @ManyToOne(() => FeedEntity)
  @JoinColumn({ name: 'feed_id' })
  feed: FeedEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ default: false })
  deleted: boolean;
}
