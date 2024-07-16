import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { IRegisterDTOFormGroup } from '../../models/auth.interface';
import { INSURNACE_INQUIRE_VALIDATORS } from '../../core/validations';
import { VALIDATORS } from '../../core/validations/global.validators';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {
  #fb = inject(FormBuilder);
  form= this.#fb.group<IRegisterDTOFormGroup>({
    fullName: new FormControl('', [Validators.minLength(8), Validators.required]),
    nationalId: new FormControl('', INSURNACE_INQUIRE_VALIDATORS['idNumber']),
    phoneNumber: new FormControl('', [VALIDATORS['phone'], Validators.required]),
    email: new FormControl('', [VALIDATORS['email'], Validators.required]),
    password: new FormControl('', [VALIDATORS['password'], Validators.required]),
    confirmPassword: new FormControl('', [VALIDATORS['password'], Validators.required]),
  })

  get fullName(){
    return this.form.controls.fullName;
  }
  get nationalId(){
    return this.form.controls.nationalId;
  }
  get phoneNumber(){
    return this.form.controls.phoneNumber;
  }
  get email(){
    return this.form.controls.email;
  }
  get password(){
    return this.form.controls.password;
  }
  get confirmPassword(){
    return this.form.controls.confirmPassword;
  }
}
