import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginModel } from '../modelos/user-logi.model';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor( private http: HttpClient) {
   
   }


    realizarLogin(modelo: UserLoginModel) {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          correo: modelo.email,
          contrasena: modelo.password
        }
      )
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let rol = JSON.stringify(data);
     

      if (rol.includes("admi")){
        alert('bienvenido ')
       
      } else {
        alert('el usuario no se encuentra registrado')
      }
    })
    .catch(error => {
      // Aquí puedes manejar los errores de la solicitud
      console.error(error);
    });
  }
  
   

    
   }

    



