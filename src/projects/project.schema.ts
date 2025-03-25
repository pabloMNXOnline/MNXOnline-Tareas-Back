import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types, HydratedDocument } from 'mongoose';
import { User } from 'src/users/user.schema';
import { Thing } from 'thing.schema';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project extends Thing{

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'User'})
    user: User;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], default:[] })
    colaborators: User[];

    @Prop()
    personal: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
