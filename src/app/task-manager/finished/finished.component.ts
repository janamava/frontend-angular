import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TasksService } from 'src/app/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit {

  // tasks$: Observable<Array<Task>>;
  tasks: Array<Task>;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  sendTaskForUnmarking(task: Task) {
    this.taskService.putTask(task).subscribe(res => {
      if (res.message === "success") {
        task.status = false;
      }
    });
  }

  sendTaskForDeleting(task: Task) {
    this.taskService.deleteTask(task).subscribe(res => {
      if (res.message === "success") {
        this.tasks = this.tasks.filter(item => task.id != item.id);
      }
    });
  }
}
