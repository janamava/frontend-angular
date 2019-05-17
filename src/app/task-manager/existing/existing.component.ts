import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.scss']
})
export class ExistingComponent implements OnInit {

  tasks: Array<Task>;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(data => (this.tasks = data));
  }

}
