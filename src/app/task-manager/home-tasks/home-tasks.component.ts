import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/Task';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrls: ['./home-tasks.component.scss']
})
export class HomeTasksComponent implements OnInit {

  tasks: Array<Task>[];
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private storage: LocalStorageService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      description: ['', Validators.required],
      status: [false]
    })

  }
  submit() {
    if (this.storage.retrieve('tasks') === null) {
      this.storage.store('tasks', [this.formGroup.value]);
    }
    else {
      this.tasks = this.storage.retrieve('tasks');
      this.tasks.push(this.formGroup.value);
      this.storage.store('tasks', this.tasks);
    }
  }
}
