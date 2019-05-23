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
    this.tasks$ = this.taskService.getTasks()
  }

}
