import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./users.schema";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersRepository {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async create( user: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(user);
        const savedUser = await createdUser.save();

        return savedUser;
    }

    async findAll(filter: Record<string, any>): Promise<User[]> {
        return this.userModel
            .find(filter)
            .lean()
            .exec();
    }

    // async find(
    //     usernames: string[],
    //     additionalFilter: Record<string,any>
    // ): Promise<User[]> {
    //     return this.userModel
    //         .find({
    //             ...additionalFilter,
    //             username: {$in: usernames.map((username) =>)}
    //         })
    // }

}