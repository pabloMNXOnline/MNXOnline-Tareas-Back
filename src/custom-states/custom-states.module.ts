import { Module } from '@nestjs/common';
import { CustomStatesService } from './custom-states.service';
import { CustomStatesController } from './custom-states.controller';
import { CustomStateSchema, CustomState } from './custom-state.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [CustomStatesController],
  providers: [CustomStatesService],
  imports:[MongooseModule.forFeature([{name: CustomState.name, schema: CustomStateSchema}])]
})
export class CustomStatesModule {}
