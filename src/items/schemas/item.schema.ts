import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

import * as mongoose from 'mongoose';

export type ShoppingListDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop()
  name: string; // Name of the item

  @Prop()
  quantity: number; // Quantity of the item

  @Prop()
  description: string; // Description of the item

  @Prop()
  image: string; // URL to the item's image

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  addedBy: User; // User who added the item

  @Prop()
  possibleIsleDescription: string; // Description of the isle where the item can possibly be found
}

export const ItemSchema = SchemaFactory.createForClass(Item);
