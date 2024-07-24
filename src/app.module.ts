import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';

@Module({
  imports: [
    GroupsModule,
    UsersModule,
    ItemsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ShoppingListsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
