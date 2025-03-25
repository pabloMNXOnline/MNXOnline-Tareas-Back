import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import {ObjectId} from 'mongoose'

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  async findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId) {
    return this.projectsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: ObjectId, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId) {
    return this.projectsService.remove(id);
  }

  @Get('user/:id')
  async getProjectsByUser(@Param('id') id: ObjectId){
    return this.projectsService.findProjectByUser(id);
  }
}