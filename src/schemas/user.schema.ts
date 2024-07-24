import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import * as mongoose from 'mongoose';
import { Room } from './room.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Room' })
  rooms: Room[]; // Array of room ids

  @Prop()
  profileImage: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
