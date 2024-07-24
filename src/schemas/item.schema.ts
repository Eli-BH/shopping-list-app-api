import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
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
}
