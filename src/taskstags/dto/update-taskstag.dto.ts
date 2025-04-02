import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskstagDto } from './create-taskstag.dto';

export class UpdateTaskstagDto extends PartialType(CreateTaskstagDto) {}
