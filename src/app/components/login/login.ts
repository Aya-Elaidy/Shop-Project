import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { createLoginForm } from '../../forms/login';
import { Auth } from '../service/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  error: string = '';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = createLoginForm(this.fb);
  }

  login() {
    const { username, password } = this.loginForm.value;
    this.auth.login(username, password).subscribe({
      next: () => {
        this.toastr.success('Login Successful ', 'Success');
        this.router.navigate(['/product']); 
      },
      error: (err) => {
        this.error = err.error.message || 'Login failed';
        this.toastr.error(this.error, 'Error');
      },
    });
  }

  resetForm() {
    this.loginForm.reset();
    this.toastr.info('Form Reset');
  }
}
