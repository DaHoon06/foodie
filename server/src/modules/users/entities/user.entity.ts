import { Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;
}
