import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    public tasks = [
        { id: 1, name: 'Tarea 1', description: 'Descripción de la tarea 1', colaborator_id: 1, status_id:1 },
        { id: 2, name: 'Tarea 2', description: 'Descripción de la tarea 2', colaborator_id: 1, status_id:1 },
        { id: 3, name: 'Tarea 3', description: 'Descripción de la tarea 3', colaborator_id: 1, status_id:1 },
        { id: 4, name: 'Tarea 4', description: 'Descripción de la tarea 4', colaborator_id: 1, status_id:1 },
    ];

    //Esta funcion se cambiara en un futuro para llamadas a la api correspondiente

    findOne(id:number): any {
        console.log('Buscando tarea con ID:', id);
        console.log(this.tasks.find((task) => task.id == id));
        return this.tasks.find((task) => task.id == id);
    }

    update(id: number, updatedTask: any): void {
        console.log('ID recibido:', id);
        console.log('Datos recibidos:', updatedTask);
        const taskIndex = this.tasks.findIndex((task) => task.id == id);
        console.log('Índice encontrado:', taskIndex);
        if (taskIndex !== -1) {
          this.tasks[taskIndex] = {
            ...this.tasks[taskIndex],
            ...updatedTask,
            id: this.tasks[taskIndex].id,
          };
          console.log('Tarea actualizada:', this.tasks[taskIndex]);
        } else {
          console.log('Tarea no encontrada');
        }
      }
      remove(id: number): void {
        const taskIndex = this.tasks.findIndex((task) => task.id == id);
        if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
      }
      }
}
