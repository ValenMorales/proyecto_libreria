
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/modelos/article.model';
import { Facultad } from 'src/app/modelos/facultad.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  facultades: Facultad[] =[];
  filtro: number= 0;
  idFacultad : any= "646500a3f664671698ad7314"
  constructor(private http: HttpClient) { }

  ngOnInit() {
   // this.getArticles();
    this.getFacultades();
    this.buscarPorFacultad(this.idFacultad);
  }

  getArticles() {
    this.http.get<Article[]>('http://localhost:3000/articulos').subscribe(
      (response) => {
        this.articles = response;
        console.log(this.articles)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getFacultades() {
    this.http.get<Facultad[]>('http://localhost:3000/facultads').subscribe(
      (response) => {
        this.facultades = response;
        console.log(this.facultades)
      },
      (error) => {
        console.error(error);
      }
    );
  }
 buscarPorFacultad(id?:string){
  this.idFacultad = id;
  this.http.get<Article[]>('http://localhost:3000/facultads/'+ this.idFacultad+ '/articulos').subscribe(
    (response) => {
      this.articles = response;
      console.log(this.articles+ "articulos de salud")
    },
    (error) => {
      console.error(error);
    }
  );

  }
}

