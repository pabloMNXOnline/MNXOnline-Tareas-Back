import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskstagsService } from './taskstags.service';
import { CreateTaskstagDto } from './dto/create-taskstag.dto';
import { UpdateTaskstagDto } from './dto/update-taskstag.dto';
import { ObjectId, Types} from 'mongoose';


@Controller('taskstags')
export class TaskstagsController {
  constructor(private readonly taskstagsService: TaskstagsService) {}

  @Post()
  create(@Body() createTaskstagDto: CreateTaskstagDto) {
    return this.taskstagsService.create(createTaskstagDto);
  }

  @Get()
  findAll() {
    return this.taskstagsService.findAll();
    
  }

  @Get('colors')
  getTaskTagWithColor() {
    return this.taskstagsService.getTaskTagWithColor();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.taskstagsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() updateTaskstagDto: UpdateTaskstagDto) {
    return this.taskstagsService.update(id, updateTaskstagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.taskstagsService.remove(id);
  }

  
}
