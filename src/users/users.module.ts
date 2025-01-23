import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersService } from './users.service';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { GetUserHandler } from './queries/handlers/get-user.handler';
import { UsersController } from './users.controller';
import { GetUsersHandler } from './queries/handlers/get-users.handler';
import { UserCreatedHandler } from './events/handlers/user-created.handler';

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserHandler,
    GetUserHandler,
    GetUsersHandler,
    UserCreatedHandler,
  ],
})
export class UsersModule {}
