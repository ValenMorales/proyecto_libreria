
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { UserCredentialsModel } from 'src/app/modelos/user-credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({});
constructor (
  private fb: FormBuilder
) {}


ngOnInit(): void {
this.createForm();
}

createForm (){
  this.form = this.fb.group({
    username:["funciona", [Validators.required, Validators.email, Validators.minLength(10)]],
    password:["funciona2", [Validators.required, Validators.minLength(10)]]
});
}

Login(){
  if (this.form.invalid){

  } else {
    let modelo = new UserCredentialsModel();
    modelo.username = this.getForm['username'].value;
    modelo.password = this.getForm['password'].value;
  }
}

get getForm(){
  return this.form.controls;
}
}