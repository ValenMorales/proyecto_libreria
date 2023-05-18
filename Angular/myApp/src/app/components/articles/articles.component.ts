
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/modelos/article.model';
import { Facultad } from 'src/app/modelos/facultad.model';
import { RandomUrl } from 'src/app/modelos/randomUrl';
import axios from 'axios';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];
  nombreArticulo: string = '';
  articulosCoincidentes: Article[] = [];
  randomurls: RandomUrl[]=[];
  facultades: Facultad[] =[];
  filtro: number= 0;
  mostrarTodos: boolean = true; // Variable para controlar si se muestran todos los artículos o los filtrados
  articulosFiltrados: Article[] = [];
  idFacultad : any= "646500a3f664671698ad7314";
  constructor(private http: HttpClient) { 
  }


  ngOnInit() {
    this.getFacultades();
    this.buscarPorFacultad(this.idFacultad);
    
  }

 
  generateRandomImageUrls() {
    for (let articulo of this.articles) {
      let randomValue = Math.random();
      let randomImageUrl = `https://source.unsplash.com/random?t=${randomValue}`;
      articulo.url = randomImageUrl;
    }
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

eliminarEstadoNOvisible(){
  let i=0;
  for (let articulo of this.articles) {
    if(articulo.estado !=="aceptado"){
      this.articles.splice(i,1)
    }
    i++;
  }
}


 buscarPorFacultad(id?:string){
  this.idFacultad = id;
  this.http.get<Article[]>('http://localhost:3000/facultads/'+ this.idFacultad+ '/articulos').subscribe(
    (response) => {
      this.articles = response;
      this.eliminarEstadoNOvisible()
      this.generateRandomImageUrls()
    },
    (error) => {
      console.error(error);
    }
  );
  }

  
  searchArticulos() {
    if (this.nombreArticulo) {
      this.articulosFiltrados = this.articles.filter(articulo =>
        articulo.nombre && articulo.nombre.toLowerCase().includes(this.nombreArticulo.toLowerCase())
      );
      this.mostrarTodos = false;
    } else {
      this.articulosFiltrados = this.articles;
      this.mostrarTodos = true;
    }
  }
  }







