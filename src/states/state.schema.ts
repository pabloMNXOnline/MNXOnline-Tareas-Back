import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Project } from 'src/projects/project.schema';
import { Thing } from 'thing.schema';

export type StatusDocument = HydratedDocument<Status>;

@Schema()
export class Status extends Thing{

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Project'})
    project: Project;
}

export const StatusSchema = SchemaFactory.createForClass(Status);
