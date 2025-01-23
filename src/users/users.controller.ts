/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUserQuery } from './queries/get-user.query';
import { GetUsersQuery } from './queries/get-users.query';

@Controller('users')
export class UsersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() body: { name: string; email: string }) {
    const command = new CreateUserCommand(body.name, body.email);
    return this.commandBus.execute(command);
  }

  @Get()
  async getUsers() {
    const query = new GetUsersQuery();
    return this.queryBus.execute(query);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const query = new GetUserQuery(id);
    return this.queryBus.execute(query);
  }
}
