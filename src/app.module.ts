import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { CustomStatesModule } from './custom-states/custom-states.module';
import { StatesModule } from './states/states.module';
import { LabelsModule } from './labels/labels.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule, 
    ProjectsModule, 
    CustomStatesModule, 
    StatesModule, 
    LabelsModule,
    ConfigModule.forRoot({
    envFilePath:'.env',
    }), 
    MongooseModule.forRoot(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:27017/`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}