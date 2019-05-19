import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { Task } from '../../Task';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.scss']
})
export class ExistingComponent implements OnInit {

  // tasks$: Observable<Array<Task>>;
  tasks: Array<Task>[];

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
    // this.tasks$ = this.tasksService.getTasks();
  
    this.retrieve();
  }

  retrieve(){
    this.tasks = this.storage.retrieve('tasks');
  }
}
