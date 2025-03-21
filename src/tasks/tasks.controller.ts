import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RegisterTask } from './tasks.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    //Obtenemos todas las tareas: 
    @Get()
    public tasks():any{
        return this.tasksService.tasks
    }

    //Registrar una tarea: 
    @Post()
    async create(@Body() tasks:RegisterTask){
        return {
            name: tasks.name,
            description: tasks.description,
            colaborator_id: tasks.colaborator_id,
            status_id: tasks.status_id,
            message: 'Se ha registrado una tarea correctamente',
          };
    }

    //Modificar una tarea existente:
    @Put(':id')
    async update(@Param('id') id: number, @Body() tasks:RegisterTask) {
    const existingTask = this.tasksService.findOne(id);

    if (!existingTask) {
      return { message: 'Tarea no encontrada' };
    }

    this.tasksService.update(id, tasks);

    return {
        name: tasks.name,
        description: tasks.description,
        colaborator_id: tasks.colaborator_id,
        status_id: tasks.status_id,
        message: 'Tarea actualizada correctamente',
      };
  }

    @Delete(':id') // Corrección aquí
    async remove(@Param('id') id: number){ // Corrección aquí
        const task = this.tasksService.findOne(id);
        if (!task) {
            return { message: 'Tarea no encontrada' };
        }

        this.tasksService.remove(id);

        return { message: 'Tarea eliminada correctamente' };
    }
}

