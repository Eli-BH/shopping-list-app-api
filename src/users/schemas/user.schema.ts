import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Group } from '../../groups/schemas/group.schema';

import * as mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string; // Username of the user

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Group' })
  groups: Group[]; // Array of Group ids

  @Prop()
  profileImage: string; // URL to the user's profile image
}

export const UserSchema = SchemaFactory.createForClass(User);
