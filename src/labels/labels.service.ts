import { Injectable } from '@nestjs/common';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { Label } from './label.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LabelsService {

  constructor(
      @InjectModel(Label.name) private labelModel: Model<Label>
    ) { }

  create(createLabelDto: CreateLabelDto) {
    const createdLabel = new this.labelModel(createLabelDto);
    return createdLabel.save();
  }

  findAll() {
    return this.labelModel.find().exec();
  }

  findOne(id: string) {
    return this.labelModel.findById(id).exec();
  }

  update(id: string, updateLabelDto: UpdateLabelDto) {
    return this.labelModel.findByIdAndUpdate(id,updateLabelDto).exec();
  }

  remove(id: string) {
    return this.labelModel.findByIdAndDelete(id).exec();
  }
}
