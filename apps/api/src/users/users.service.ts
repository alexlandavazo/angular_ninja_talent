import { User } from '@fem/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  mockUsers: User[] = [
    { id: '1', firstname: 'Alejandro', lastname: 'Landavazo', email: 'alejandrolandavazo@gmail.com', birthDate: '1997-05-23', street: 'Tubac 29', city: 'Hermosillo', country: 'MX', postalcode: '83113' },
  ];

  findAll() {
    return this.mockUsers;
  }

  findOne(id: string) {
    return this.mockUsers.find((user) => user.id === id);
  }

  create(user: User) {
    this.mockUsers = [...this.mockUsers, Object.assign({}, user, { id: uuidv4() })];
    return this.mockUsers;
  }

  update(id: string, user: User) {
    this.mockUsers = this.mockUsers.map((w) => (w.id === id ? user : w));
    return this.mockUsers;
  }

  remove(id: string) {
    this.mockUsers = this.mockUsers.filter((user) => user.id !== id);
    return this.mockUsers;
  }
}
