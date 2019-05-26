import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TasksService } from 'src/app/tasks.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit {

  // tasks$: Observable<Array<Task>>;
  task$: Subscription;
  tasks: Array<Task>;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  ngOnDestroy(): void {
    if (this.task$ !== undefined) {
      this.task$.unsubscribe();
    }
  }

  sendTaskForUnmarking(task: Task) {
    this.task$ = this.taskService.putTask(task).subscribe(res => {
      if (res.message === "success") {
        task.status = false;
      }
    });
  }

  sendTaskForDeleting(task: Task) {
    this.task$ = this.taskService.deleteTask(task).subscribe(res => {
      if (res.message === "success") {
        this.tasks = this.tasks.filter(item => task.id != item.id);
      }
    });
  }
}
