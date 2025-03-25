import { Injectable } from '@nestjs/common';
import { CreateCustomStateDto } from './dto/create-custom-state.dto';
import { UpdateCustomStateDto } from './dto/update-custom-state.dto';
import { InjectModel,} from '@nestjs/mongoose';
import { CustomState } from './custom-state.schema';
import { Model } from 'mongoose';

@Injectable()
export class CustomStatesService {

  constructor(
      @InjectModel(CustomState.name) private customStateModel: Model<CustomState>
    ) { }

  create(createCustomStateDto: CreateCustomStateDto) {
    const createdCustomState = new this.customStateModel(createCustomStateDto);
    return createdCustomState.save();
  }

  findAll() {
    return this.customStateModel.find().exec();
  }

  findOne(id: string) {
    return this.customStateModel.findById(id).exec();
  }

  update(id: string, updateCustomStateDto: UpdateCustomStateDto) {
    return this.customStateModel.findByIdAndUpdate(id, updateCustomStateDto).exec();
  }

  remove(id: string) {
    return this.customStateModel.findByIdAndDelete(id);
  }
}
