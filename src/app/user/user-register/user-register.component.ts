import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl('',  [Validators.required,Validators.minLength(6)]),
      mobile: new FormControl('', Validators.required),


    },this.passwordMatchingValidator)
  }


  passwordMatchingValidator(fg: AbstractControl): ValidationErrors | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  get userName(){
    return this.registerForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerForm.get('email') as FormControl;
  }
  get password(){
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword') as FormControl;
  }
  onSubmit() {
    if(this.registerForm.valid){
      console.log(this.registerForm)
    }
  }
}
