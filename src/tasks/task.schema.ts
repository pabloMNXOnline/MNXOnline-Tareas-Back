import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/user.schema';
import { Status } from 'src/states/state.schema';
import { Project } from 'src/projects/project.schema';
import { Thing } from 'thing.schema';
import { Label } from 'src/labels/label.schema';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task extends Thing {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Status'})
    status: Status

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'User'})
    user: User;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Project'})
    project: Project;

    @Prop({ type: [Date], default: [] })
    statusHistoric: Date [];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Label' }], default:[] })
    labels: Label [] ; 


}

export const TaskSchema = SchemaFactory.createForClass(Task);
