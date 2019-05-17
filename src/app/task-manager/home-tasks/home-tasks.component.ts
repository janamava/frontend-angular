import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrls: ['./home-tasks.component.scss']
})
export class HomeTasksComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      description: ['', Validators.required],
      status: [false]
    })
  }

  submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
    else {
      console.log("not valid");

    }
  }

}
