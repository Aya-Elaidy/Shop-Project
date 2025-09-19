import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { createLoginForm } from '../../forms/login';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  submitData:any=null;
loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = createLoginForm(this.fb);
  }

 




 onSubmit() {
  if (this.loginForm.valid) {
    this.submitData = this.loginForm.value;

    this.loginForm.reset();


  }
}


  resetForm() {
this.loginForm.reset();
  }
}
