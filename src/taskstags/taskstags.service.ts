import { Injectable } from '@nestjs/common';
import { CreateTaskstagDto } from './dto/create-taskstag.dto';
import { UpdateTaskstagDto } from './dto/update-taskstag.dto';
import { TaskTag } from './taskstag.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongoose';

@Injectable()
export class TaskstagsService {

  constructor(
        @InjectModel(TaskTag.name) private tasktagModel: Model<TaskTag>
      ) { }
  

  async create(createTaskstagDto: CreateTaskstagDto) {
    const createdTaskTag = new this.tasktagModel(createTaskstagDto)
    return createdTaskTag.save();
  }

  async findAll() {
    return this.tasktagModel.find().exec();
  }

  async findOne(id: ObjectId) {
    return this.tasktagModel.findById(id).exec();
  }

  async update(id: ObjectId, updateTaskstagDto: UpdateTaskstagDto) {
    return this.tasktagModel.findByIdAndUpdate(id,updateTaskstagDto).exec();
  }

  async remove(id: ObjectId) {
    return this.tasktagModel.findByIdAndUpdate(id).exec();
  }

  async getTaskTagWithColor(){
    return this.tasktagModel.find().populate('label').populate('task').exec();
  }
}
