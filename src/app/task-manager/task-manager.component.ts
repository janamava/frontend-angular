import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../Task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

  addTaskToServer(task: Task) {
    this.taskService.postTask(task);

  }
}
