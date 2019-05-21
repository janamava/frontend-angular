import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.scss']
})
export class FinishedComponent implements OnInit {

  tasks: Array<Task>[];

  constructor() { }

  ngOnInit() {

  }

}
