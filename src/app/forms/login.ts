import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export function createLoginForm(fb: FormBuilder): FormGroup {
  const form = fb.group(
    {
            username: ['', [Validators.required, Validators.minLength(5)]],

     
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    },
   
  );

  return form;
}

