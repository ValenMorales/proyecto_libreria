
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

import { UserLoginModel } from 'src/app/modelos/user-logi.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({});
constructor (
  private fb: FormBuilder,
  private LoginService: LoginService
) {}


ngOnInit(): void {
this.createForm();
}

createForm (){
  this.form = this.fb.group({
    username:["", [Validators.required, Validators.email, Validators.minLength(10)]],
    password:["", [Validators.required, Validators.minLength(10)]]
});
}

Register(){
  if (this.form.invalid){

  } else {
    let modelo = new (UserLoginModel);
    modelo.email = this.getForm['username'].value;
    modelo.password = this.getForm['password'].value;
    console.log(modelo.email, modelo.password);
    this.LoginService.realizarLogin(modelo)
  }
}

get getForm(){
  return this.form.controls;
}
}