import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity()
export class FileImageEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  _id: string;

  @Column()
  fileName: string;
}
