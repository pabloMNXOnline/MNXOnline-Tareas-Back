import { Module } from '@nestjs/common';
import { TaskstagsService } from './taskstags.service';
import { TaskstagsController } from './taskstags.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskTag, TaskTagSchema } from './taskstag.schema';

@Module({
  controllers: [TaskstagsController],
  providers: [TaskstagsService],
  imports:[MongooseModule.forFeature([{name: TaskTag.name, schema: TaskTagSchema}])],
})
export class TaskstagsModule {}
