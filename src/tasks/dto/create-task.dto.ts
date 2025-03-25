import { Status } from "src/states/state.schema";
import { IsMongoId, IsOptional, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/users/user.schema";

export class CreateTaskDto {
    /*
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    status: Status;

    @IsMongoId({ message: "El ID del proyecto no es válido" })
    project: string;

    @IsOptional()  // 🔹 Permite que sea opcional (nullable)
    @IsMongoId({ message: "El ID del usuario no es válido" })
    user?: User;
    */
}
