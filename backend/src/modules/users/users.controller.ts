import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() dto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(dto)
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAllUsers();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findUserById(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateDate: Partial<User>,
    ): Promise<User> {
        return this.usersService.updateUser(id, updateDate);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<void> {
        return this.usersService.deleteUser(id);
    }
    
}
