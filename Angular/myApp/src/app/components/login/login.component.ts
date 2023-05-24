
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  private LoginService: LoginService,
  private router: Router
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
     .then(rol => {
    console.log(rol);
    if (rol.includes("admi")) {
      this.router.navigate(['/gestionadmin']); // Redirige a la página de gestión de administrador
    } else if (rol.includes("autor")) {
      this.router.navigate(['/gestionautor']); // Redirige a la página de gestión de autor
    } else {
      alert('El usuario no se encuentra registrado');
    }
  })
  .catch(error => {
    console.error(error);
  });
  }
}

get getForm(){
  return this.form.controls;
}
}