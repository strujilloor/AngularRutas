import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Router} from '@angular/router';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public taskService: TaskService,
              private router: Router) { }

  ngOnInit() {}

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement) {
    console.log('added', newTitle.value, newDescription.value);
    this.taskService.addTask({
        title: newTitle.value,
        description: newDescription.value
    });
    console.log(this.taskService.getTasks());
    this.router.navigate(['/task-list']);
    return false;
  }
}
