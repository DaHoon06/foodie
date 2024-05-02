import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
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

  @ManyToOne(() => FeedEntity, (feed) => feed.files)
  feed: FeedEntity;

  @ManyToOne(() => UserEntity, (user) => user.files)
  user: UserEntity;
}
