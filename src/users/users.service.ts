// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import User from 'src/interfaces/user.interface';
import { UserCreatedEvent } from './events/user-created.event';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  constructor(private readonly eventBus: EventBus) {}

  createUser(name: string, email: string) {
    const newUser: User = { id: Date.now().toString(), name, email };
    this.users.push(newUser);
    const event = new UserCreatedEvent(newUser.id, name, email);
    this.eventBus.publish(event);
    return newUser;
  }

  getUsers() {
    return this.users;
  }
  getUserById(userId: string) {
    return this.users.find((user) => user.id === userId);
  }
}
