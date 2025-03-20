import { Body, Controller, Get, Post } from '@nestjs/common';
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
        return 'Se ha registrado una tarea correctamente'
    }


}
