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

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
  }

  sendTask(task: Task) {//try to centralise it by using service and emiting in the child component, and parent component sending a task 
    this.taskService.putTask(task).subscribe();
  }
}