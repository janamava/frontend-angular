import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit, OnDestroy {

  task$: Subscription;

  constructor(private taskService: TasksService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.task$ !== undefined) {
      this.task$.unsubscribe();
    }
  }

  addTaskToServer(task: Task) {
    this.task$ = this.taskService.postTask(task).subscribe();
  }
}
