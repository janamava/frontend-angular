import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { Task } from '../../Task';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.scss']
})
export class ExistingComponent implements OnInit {

  tasks$: Observable<Array<Task>>;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
  }

  sendTaskForMarking(task: Task) {
    this.taskService.putTask(task).subscribe(res => {
      if (res.message === "success") {
        task.status = true;
      }
    });
  }
}