import { Injectable } from '@nestjs/common';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { Label } from './label.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class LabelsService {

  constructor(
      @InjectModel(Label.name) private labelModel: Model<Label>
    ) { }

  async create(createLabelDto: CreateLabelDto) {
    const createdLabel = new this.labelModel(createLabelDto);
    return createdLabel.save();
  }

  async findAll() {
    return this.labelModel.find().exec();
  }

  async findOne(id: ObjectId) {
    return this.labelModel.findById(id).exec();
  }

  async update(id: ObjectId, updateLabelDto: UpdateLabelDto) {
    return this.labelModel.findByIdAndUpdate(id,updateLabelDto).exec();
  }

  async remove(id: ObjectId) {
    return this.labelModel.findByIdAndDelete(id).exec();
  }

  async labelByProject( id : ObjectId){
    return this.labelModel.find({project : id}).populate('project').exec();
  }
}
