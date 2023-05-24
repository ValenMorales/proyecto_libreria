
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/modelos/article.model';
import { Facultad } from 'src/app/modelos/facultad.model';
import { UserLoginModel } from '../modelos/user-logi.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  rol: string = "";
  usuarios: UserLoginModel[] =[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
   // this.getArticles();
    this.getFacultades();
  }

  getFacultades() {
    this.http.get<UserLoginModel[]>('http://localhost:3000/administradors').subscribe(
      (response) => {
        this.usuarios = response;
        console.log(this.usuarios)
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

