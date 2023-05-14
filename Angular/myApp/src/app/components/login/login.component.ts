
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { UserCredentialsModel } from 'src/app/modelos/user-credentials.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({});
constructor (
  private fb: FormBuilder,
  private securityService :SecurityService
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

Register(){
  if (this.form.invalid){

  } else {
    let modelo = new UserCredentialsModel();
    modelo.username = this.getForm['username'].value;
    modelo.password = this.getForm['password'].value;
    console.log(modelo.username, modelo.password);
    this.securityService.Register(modelo).subscribe({
      next: (data: any) =>{
          console.log(data);
      } ,error : (error:any) =>{
        console.log("hubo un error al conectar el backend");
        console.log (error);
      }
    })
  }
}

get getForm(){
  return this.form.controls;
}
}