import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Item } from 'src/items/schemas/item.schema';
import * as mongoose from 'mongoose';

export type ShoppingListDocument = HydratedDocument<ShoppingList>;

@Schema()
export class ShoppingList {
  @Prop()
  name: string; // Name of the shopping list

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Item' })
  items: Item[]; // Array of item ids
}

export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);
