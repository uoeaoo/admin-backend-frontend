import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserRole } from '../../utils/role';

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema({ collection: 'users', versionKey: false, timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Prop()
  email?: string;

  @Prop()
  resetToken?: string;

  @Prop()
  resetTokenExpires?: Date;

  // добавить персонажей? или игровой аккаунт
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('id').get(function () {
  return this._id.toString();
});

UserSchema.set('toJSON', {
  virtuals: true,
});

export { UserSchema };
