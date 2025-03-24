import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './task.schema';
import { Model, ObjectId } from 'mongoose';


@Injectable()
export class TasksService {

  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>
  ) { }

  async create(createTaskDto: CreateTaskDto) {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll() {
    return this.taskModel.find().exec();
  }

  async findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id).exec();
  }

  async remove(id: string) {
    return this.taskModel.findByIdAndDelete(id).exec();
  }

  async findTasksbyProject(id: ObjectId){
    return this.taskModel.find({project_id : id}).populate('project_id')
  }

  async findTaskbyProjectAndUser(idProject: ObjectId, idUser: ObjectId){
    return this.taskModel.find({
      $and: [
        { project_id: idProject },
        { user_id: idUser }
      ]
    })
    .populate('project_id')
    .populate('user_id')
    .exec();
  }
}
