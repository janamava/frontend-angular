import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/Task';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrls: ['./home-tasks.component.scss']
})
export class HomeTasksComponent implements OnInit {

  // @Output() addTask = new EventEmitter<Task>();
  tasks: Array<Task>[];
  newTask: Task;
  formGroup: FormGroup;
  isValid: boolean = false;

  constructor(private formBuilder: FormBuilder, private taskService: TasksService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      description: ['', Validators.required],
      status: [false]
    })

    this.formGroup.valueChanges.subscribe(() => this.isValid = this.formGroup.valid);
  }

  submit() {
    if (this.formGroup.valid) {    
      this.taskService.postTask(this.formGroup.value).subscribe();
    }
  }
}

  // submit() {
  //   if (this.formGroup.valid) {
  //     this.addTask.emit(this.formGroup.value);
      
  //     // const form = document.getElementsByTagName('form')[0]; sets the status of the object to null
  //     // form.reset();
  //   }
  // }


