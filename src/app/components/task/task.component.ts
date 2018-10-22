import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    task: Task;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.task = new Task();
      this.route.params.subscribe(
          (params: Params) => {
              this.task.title = params.title;
              this.task.description = params.description;
          }
      );
  }

  back() {
      this.router.navigate(['/task-list']);
  }

}
