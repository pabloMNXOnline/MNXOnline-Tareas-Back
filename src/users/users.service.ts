import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
      @InjectModel(User.name) private userModel: Model<User>
    ) { }

  async create(createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    const cryptPassword = await bcrypt.hash(createUserDto.password, 10);
    console.log('cryptPassword', cryptPassword);
    createUserDto.password = cryptPassword;
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findByUsername(username: string): Promise<User | null> {
    const userDoc = await this.userModel.findOne({ username }).lean().exec();
    if (!userDoc) return null;
    console.log('findByUsername:', userDoc);
    return userDoc;
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }
  
}
