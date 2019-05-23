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

  tasks$: Observable<Array<Task>>;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
  }

  sendTaskForUnmarking(task: Task) {//move it to the parent comp and unsubscribe and emit task here 
    this.taskService.putTask(task).subscribe();
  }

  sendTaskForDeleting(task: Task): void {//same here
    this.taskService.deleteTask(task).subscribe();
  }
}
