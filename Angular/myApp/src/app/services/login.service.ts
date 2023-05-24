import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginModel } from '../modelos/user-logi.model';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  rol:string = ""
  constructor( private http: HttpClient) {
   }
   
   getRol(): string {
    return this.rol; // Ejemplo de valor de rol
  }

  

    realizarLogin(modelo: UserLoginModel): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          correo: modelo.email,
          contrasena: modelo.password
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          modelo.rol = JSON.stringify(data);
        
          if (modelo.rol.includes("admi") || modelo.rol.includes('autor')) {
            alert('¡Bienvenido!');
            this.rol = modelo.rol
          } else {
            alert('El usuario no se encuentra registrado');
          }
          
          resolve(modelo.rol);
        })
        .catch(error => {
          // Aquí puedes manejar los errores de la solicitud
          console.error(error);
          reject(error);
        });
    });
  }
  


   

    
   }


