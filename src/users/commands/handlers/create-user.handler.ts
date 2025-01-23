import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UsersService } from '../../users.service';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly usersService: UsersService) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async execute(command: CreateUserCommand) {
    return this.usersService.createUser(command.name, command.email);
  }
}
