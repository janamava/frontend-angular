import { Component, OnInit } from '@angular/core';
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

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasks$ = this.tasksService.getTasks();
  }

}
