import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { StatesModule } from './states/states.module';
import { LabelsModule } from './labels/labels.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TaskstagsModule } from './taskstags/taskstags.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TasksModule, 
    ProjectsModule, 
    StatesModule, 
    LabelsModule,
    ConfigModule.forRoot({
    envFilePath:'.env',
    }), 
    MongooseModule.forRoot(
      process.env.MONGODB_URL
      ??(
        () => {throw new Error('La variable de entorno no está definida en el .env')}
      )(),
    ), UsersModule, TaskstagsModule, AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}