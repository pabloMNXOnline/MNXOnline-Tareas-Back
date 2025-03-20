import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    public tasks = [
        { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1' },
        { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2' },
        { id: 3, title: 'Tarea 3', description: 'Descripción de la tarea 3' },
        { id: 4, title: 'Tarea 3', description: 'Descripción de la tarea 4' },
    ];

}
