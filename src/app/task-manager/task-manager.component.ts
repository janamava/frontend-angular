import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}

  // addTaskToServer(task: Task) {
  //   this.task$ = this.taskService.postTask(task).subscribe();
  // }

  // sendIdToServer(task: Task) {
  //   this.id$ = this.taskService.putTask(task).subscribe();
  // }


