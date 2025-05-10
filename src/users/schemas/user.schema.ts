import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Thing } from "thing.schema";

export class User extends Thing {
    @Prop()
    password: string;

    @Prop()
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);