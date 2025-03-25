import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomStateDto } from './create-custom-state.dto';

export class UpdateCustomStateDto extends PartialType(CreateCustomStateDto) {}
