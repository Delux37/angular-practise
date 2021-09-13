import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  defaultValue: string = 'default value'
  twoWayBinding: string = ''
  constructor() { }

  @ViewChild('form') form!: NgForm;

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    const submitted = {
      username: form.value.username,
      password: form.value['password-group'].password,
      job: form.value.job,
      gender: form.value.username
    } 
    this.form.reset();
    console.log(submitted);
  }
  updateUsername() {
    this.form.form.patchValue({
      'username': 'George'
    })
  }
}
