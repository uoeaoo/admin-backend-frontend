import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(data: Partial<User>): Promise<UserDocument> {
    const user = new this.userModel(data);
    return user.save();
  }

  async findAll(filter: Record<string, any> = {}): Promise<User[]> {
    return this.userModel.find(filter).lean().exec();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).lean().exec();
  }

  async findOne(filter: Record<string, any>): Promise<User | null> {
    return this.userModel.findOne(filter).lean().exec();
  }

  async updateById(id: string, update: Partial<User>): Promise<User | null> {
    return this.userModel
      .findByIdAndUpdate(id, update, { new: true })
      .lean()
      .exec();
  }

  async deleteById(id: string): Promise<boolean> {
    const res = await this.userModel.findByIdAndDelete(id).exec();
    return !!res;
  }

  async findByUsername(username: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async existsByUsername(username: string): Promise<boolean> {
    return this.userModel.exists({ username }).then(Boolean);
  }
}
