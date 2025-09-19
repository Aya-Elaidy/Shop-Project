import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { createRegisterForm } from '../../forms/register';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  submitData:any=null;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = createRegisterForm(this.fb);
  }

 

  // mobiles array
  get mobiles(): FormArray {
    return this.registerForm.get('mobiles') as FormArray;
  }

  addMobile() {
    this.mobiles.push(
      this.fb.control('', [
        Validators.required,
        Validators.pattern(/^(01)[0-9]{9}$/),
      ])
    );
  }

  removeMobile(index: number) {
    if (this.mobiles.length >1) {
      this.mobiles.removeAt(index);
    }
  }

 onSubmit() {
  if (this.registerForm.valid) {
    this.submitData = this.registerForm.value;

    this.registerForm.reset();


  }
}


  resetForm() {
this.registerForm.reset();
  }
}
