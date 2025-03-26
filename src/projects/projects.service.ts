import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './project.schema';
import { Model, ObjectId, Types} from 'mongoose';

@Injectable()
export class ProjectsService {
  
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>
  ) { }

  async create(createProjectDto: CreateProjectDto) {
    const createdProject = new this.projectModel(createProjectDto);
    return createdProject.save();
  }

  async findAll() {
    return this.projectModel.find().exec();
  }

  async findOne(id: ObjectId) {
    return this.projectModel.findById(id).exec();
  }

  async update(id: ObjectId, updateProjectDto: UpdateProjectDto) {
    return this.projectModel.findByIdAndUpdate(id, updateProjectDto).exec();
  }

  async remove(id: ObjectId) {
    return this.projectModel.findByIdAndDelete(id);
  } 

  async findProjectByUser(id: ObjectId) {
  return this.projectModel
    .find({
      $or: [
        { user: id }, // El usuario es el dueño del proyecto
        { colaborators: id } // El usuario es un colaborador
      ]
    })
    .populate('user')
    .populate('colaborators')
    .exec();
  }

  async findUsersByProject(id: ObjectId){
    return this.projectModel.findById(id).populate('user', 'username').populate('colaborators','username').exec();
  }
  
}
