import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredentialsModel } from '../modelos/user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor( private http: HttpClient) {
   
   }

   Register(modelo: UserCredentialsModel): Observable<any>{
    return this.http.post<any>("http://localhost:3000/administradors", {
      //nombre: "sergio",
      //correo: modelo.username,
    //cedula: "10012929",
      //contraseña:modelo.password
     // nombre: "sergio",
    //  correo: "ajlk@gmail.com",
     // cedula: "10012929",
    //  contraseña: "lajskjadsdfjlak"
    nombre: modelo.username,
    correo: modelo.email,
    cedula: modelo.cedula,
    contrasena: modelo.password

    });
   }
}
