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

   Login(modelo: UserCredentialsModel): Observable<any>{
    return this.http.get<any>('http://localhost:3000/administrators');
   }
}
