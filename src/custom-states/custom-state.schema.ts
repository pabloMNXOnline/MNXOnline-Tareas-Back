import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Project } from 'src/projects/project.schema';

export type CustomStateDocument = HydratedDocument<CustomState>;

@Schema()
export class CustomState {
    @Prop()
    name: string;

    @Prop({type: String, ref:'Project'})
    project_id: Project;

    @Prop()
    dateCreated:Date;

    @Prop()
    dateModified:Date;
}

export const CustomStateSchema = SchemaFactory.createForClass(CustomState);
