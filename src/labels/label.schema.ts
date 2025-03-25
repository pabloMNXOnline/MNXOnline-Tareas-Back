import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Project } from 'src/projects/project.schema';
import { Thing } from 'thing.schema';


export type LabelDocument = HydratedDocument<Label>;

@Schema()
export class Label extends Thing{
    
    @Prop()
    color: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Project'})
        project: Project;
}

export const LabelSchema = SchemaFactory.createForClass(Label);
