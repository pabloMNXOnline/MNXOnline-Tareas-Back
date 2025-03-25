import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { StatusSchema, Status } from './state.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [StatesController],
  providers: [StatesService],
  imports:[MongooseModule.forFeature([{name: Status.name, schema: StatusSchema}])],
})
export class StatesModule {}
