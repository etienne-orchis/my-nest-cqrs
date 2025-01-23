import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UsersService } from '../../users.service';
import { GetUsersQuery } from '../get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly usersService: UsersService) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async execute() {
    return this.usersService.getUsers();
  }
}
