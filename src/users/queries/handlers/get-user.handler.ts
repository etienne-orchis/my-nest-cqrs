import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from '../get-user.query';
import { UsersService } from '../../users.service';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly usersService: UsersService) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async execute(query: GetUserQuery) {
    return this.usersService.getUserById(query.userId);
  }
}
