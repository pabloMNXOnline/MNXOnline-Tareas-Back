import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Types } from 'mongoose';
import { Thing } from 'thing.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Thing {
  @Prop({ type: String, required: true })
  @Prop()
  username: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
