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
    return this.http.post<any>("http://localhost:3000/loginAdmin", {
    nombre: modelo.username,
    correo: modelo.email,
    cedula: modelo.cedula,
    contrasena: modelo.password

    });
   }

    


}
