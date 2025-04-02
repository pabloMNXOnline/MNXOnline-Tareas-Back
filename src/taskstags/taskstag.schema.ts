import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Task } from 'src/tasks/task.schema';
import { Label } from 'src/labels/label.schema';


export type TaskTagDocument = HydratedDocument<Task>;

@Schema()
export class TaskTag{

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Task'})
    task: Task;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Label'})
    label: Label;

}

export const TaskTagSchema = SchemaFactory.createForClass(TaskTag);