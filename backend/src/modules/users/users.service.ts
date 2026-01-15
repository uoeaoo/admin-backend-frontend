import { Injectable } from '@nestjs/common';

//я честно это изменю
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            username: 'sipsipper',
            password: '12345678A',
        },
        {
            id: 2,
            username: 'reppispis',
            password: 'A87654321',
        }
    ]
    
    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }
}
