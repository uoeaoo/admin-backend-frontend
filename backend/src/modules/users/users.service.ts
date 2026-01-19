import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.schema';
import { UserRole } from 'src/utils/role';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const existingUser = await this.usersRepository.findByUsername(
      dto.username,
    );
    if (existingUser) {
      throw new ConflictException('Username is already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.usersRepository.create({
      username: dto.username,
      password: hashedPassword,
      email: dto.email,
      role: UserRole.USER,
    });

    return user.toObject();
  }

  async findAllUsers(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findUserByUsername(username: string): Promise<User> {
    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
        throw new NotFoundException('User not found')
    }

    return user
  }

  async updateUser(id: string, updateData: Partial<User>): Promise<User> {
    const updatedUser = await this.usersRepository.updateById(id, updateData);

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    const deleted = await this.usersRepository.deleteById(id);

    if(!deleted) {
        throw new NotFoundException('User not found');
    }
  }
}
