import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import * as mongoose from 'mongoose';

export type GroupDocument = HydratedDocument<Group>;

@Schema()
export class Group {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  users: User[]; // Array of user ids

  @Prop()
  shoppingLists: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  admin: User; // Admin of the Group
}

export const GroupSchema = SchemaFactory.createForClass(Group);
