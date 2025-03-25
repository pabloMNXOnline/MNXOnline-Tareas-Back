import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Status } from './state.schema';
import { Model,ObjectId } from 'mongoose';

@Injectable()
export class StatesService {

constructor(
  @InjectModel(Status.name) private stateModel : Model<Status>
){ }

  async create(createStateDto: CreateStateDto) {
    const createdState = new this.stateModel(createStateDto);
      return createdState.save();
    }

  async findAll() {
      return this.stateModel.find().exec();
    }

  async findOne(id: string) {
      return this.stateModel.findById(id).exec();
    }

  async update(id: string , updateStateDto: UpdateStateDto) {
      return this.stateModel.findByIdAndUpdate(id,updateStateDto).exec();
    }

  async remove(id: string) {
      return this.stateModel.findByIdAndDelete(id).exec();
    }
  
  async findStatesbyProject(id: ObjectId){
    return this.stateModel.find({project : id}).populate('project')
    }
}
