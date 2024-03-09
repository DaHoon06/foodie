import { Prop } from '@nestjs/mongoose';

export class Base {
  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}
