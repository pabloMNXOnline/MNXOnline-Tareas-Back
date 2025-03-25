import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomStatesService } from './custom-states.service';
import { CreateCustomStateDto } from './dto/create-custom-state.dto';
import { UpdateCustomStateDto } from './dto/update-custom-state.dto';

@Controller('custom-states')
export class CustomStatesController {
  constructor(private readonly customStatesService: CustomStatesService) {}

  @Post()
  async create(@Body() createCustomStateDto: CreateCustomStateDto) {
    return this.customStatesService.create(createCustomStateDto);
  }

  @Get()
  async findAll() {
    return this.customStatesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.customStatesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCustomStateDto: UpdateCustomStateDto) {
    return this.customStatesService.update(id, updateCustomStateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.customStatesService.remove(id);
  }
}
