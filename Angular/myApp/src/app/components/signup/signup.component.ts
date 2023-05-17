
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { UserCredentialsModel } from 'src/app/modelos/user-credentials.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit{
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
    email:["", [Validators.required, Validators.email, Validators.minLength(10)]],
    password:["", [Validators.required, Validators.minLength(10)]],
    cedula:["", [Validators.required]],
    name:["", [Validators.required]]
});
}

Register(){
  if (this.form.invalid){

  } else {
    let modelo = new UserCredentialsModel();
    modelo.username = this.getForm['name'].value;
    modelo.password = this.getForm['password'].value;
    modelo.email =this.getForm['email'].value;
    modelo.cedula = this.getForm['cedula'].value;
    console.log(modelo.username, modelo.password);
    this.securityService.Register(modelo).subscribe({
      next: (data: any) =>{
          console.log(data);
        alert("Registro Exitoso");
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