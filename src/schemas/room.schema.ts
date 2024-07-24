import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import * as mongoose from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  users: User[]; // Array of user ids

  @Prop()
  messages: string[]; // Array of message ids
}

export const RoomSchema = SchemaFactory.createForClass(Room);
