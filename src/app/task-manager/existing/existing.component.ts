import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { Task } from '../../Task';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.scss']
})
export class ExistingComponent implements OnInit {

  task$: Subscription;
  tasks$: Observable<Array<Task>>;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
  }

  ngOnDestroy(): void {
    if (this.task$ !== undefined) {     
      this.task$.unsubscribe();
    }
  }

  sendTaskForMarking(task: Task) {
    this.task$ = this.taskService.putTask(task).subscribe(res => {
      if (res.message === "success") {
        task.status = true;
      }
    });
  }
}