import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export function createRegisterForm(fb: FormBuilder): FormGroup {
  const form = fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      mobiles: fb.array([
        fb.control('', [
          Validators.required,
          Validators.pattern(/^(01)[0-9]{9}$/),
        ]),
      ]),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: [passwordMatchValidator], 
    }
  );

  return form;
}

//Validator 
function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) return null;

  return password.value === confirmPassword.value ? null : { mismatch: true };
}
