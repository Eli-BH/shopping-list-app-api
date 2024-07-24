import { ShoppingList } from '../../shopping-lists/schemas/shoppingList.schema';
import { User } from '../../users/schemas/user.schema';

export class CreateGroupDto {
  name: string;

  users: User[];

  shoppingLists: ShoppingList[];

  admin: User;
}
