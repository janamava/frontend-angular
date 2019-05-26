import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrls: ['./home-tasks.component.scss']
})
export class HomeTasksComponent implements OnInit {

  // @Output() addTask = new EventEmitter<Task>();
  task$: Subscription;
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

  ngOnDestroy(): void {
    if (this.task$ !== undefined) {
      this.task$.unsubscribe();
    }
  }

  sendNewTask() {
    if (this.formGroup.valid) {
      this.task$ = this.taskService.postTask(this.formGroup.value).subscribe();
    }
    // const form = document.getElementsByTagName('form')[0]; sets the status of the object to null
    // form.reset();
  }
}