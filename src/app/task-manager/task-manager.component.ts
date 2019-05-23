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
  // id$: Subscription;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.task$ !== undefined) {
      this.task$.unsubscribe();
    }
    // if(this.id$ !== undefined){
    //   this.id$.unsubscribe();
    // }
  }

  addTaskToServer(task: Task) {
    this.task$ = this.taskService.postTask(task).subscribe();
  }

  // sendIdToServer(id: number){
  //   this.id$ = this.taskService.putTask(id).subscribe();
  // }
}
