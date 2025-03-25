import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {Types } from 'mongoose';

export type ThingDocument = HydratedDocument<Thing>;

@Schema()
export class Thing{
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    dateCreated:Date;

    @Prop()
    dateModified:Date;
}

export const ThingSchema = SchemaFactory.createForClass(Thing);