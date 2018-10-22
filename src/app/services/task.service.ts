import { Injectable } from '@angular/core';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
    this.tasks = [
        {title: 'write', description: 'I have to write'},
        {title: 'read', description: 'I have to read'},
        {title: 'paint', description: 'I have to paint'},
    ];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    return false;
  }
}
