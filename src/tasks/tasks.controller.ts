import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ObjectId, Types} from 'mongoose';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.tasksService.remove(id);
  }

  @Get('project/:id')
    async findTasksbyProject(@Param('id') id: ObjectId){
      return this.tasksService.findTasksbyProject(id);
  }

  @Get('status/:id')
    async findTaskbyStatus(@Param('id') id:ObjectId){
      return this.tasksService.findTaskbyStatus(id)
    }

}
