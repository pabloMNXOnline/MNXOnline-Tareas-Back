import { Module } from '@nestjs/common';
import { LabelsService } from './labels.service';
import { LabelsController } from './labels.controller';
import { Label, LabelSchema } from './label.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [LabelsController],
  providers: [LabelsService],
  imports:[MongooseModule.forFeature([{name: Label.name, schema: LabelSchema}])]
})
export class LabelsModule {}
