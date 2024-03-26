import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { FeedEntity } from './feed.entity';
import { UserEntity } from '@modules/users/entities/user.entity';

@Entity()
@Unique('feed_like_unique', ['feed', 'user'])
export class FeedLikeEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;

  @ManyToOne(() => FeedEntity)
  @JoinColumn({ name: 'feed_id' })
  feed: FeedEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @CreateDateColumn()
  created_at: Date;
}
