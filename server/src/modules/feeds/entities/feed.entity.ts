import { UserEntity } from '@modules/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShopEntity } from '@modules/shop/entities/shop.entity';
import { FileImageEntity } from '@modules/files/entities/file.image.entity';

@Entity()
export class FeedEntity extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;

  @Column()
  content: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => ShopEntity)
  @JoinColumn({ name: 'shop_id' })
  shop: ShopEntity;

  @OneToMany(() => FileImageEntity, (files) => files.feed)
  files: FileImageEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'boolean', nullable: false })
  deleted: boolean = false;
}
