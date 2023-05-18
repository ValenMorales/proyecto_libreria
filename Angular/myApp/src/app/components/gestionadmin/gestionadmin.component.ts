
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/modelos/article.model';
import { Facultad } from 'src/app/modelos/facultad.model';

@Component({
  selector: 'app-articles',
  templateUrl: './gestionadmin.component.html',
  styleUrls: ['./gestionadmin.component.scss']
})
export class GestionadminComponent implements OnInit {
  articles: Article[] = [];
  constructor(private http: HttpClient) { }
  expandedItems: boolean[] = [];

  ngOnInit() {
    this.getArticles();
   
  }

  isExpanded(index: number): boolean {
    return this.expandedItems[index];
  }

  toggleExpanded(index: number): void {
    this.expandedItems[index] = !this.expandedItems[index];
  }

  acceptArticle(article: any): void {
    alert("seguro que deseas aceptar este articulo?");
   
    this.updateArticleStatus(article.id, "aceptado");
    console.log('Artículo aceptado:', article);
  }

  rejectArticle(article: any): void {
    alert("seguro que deseas rechazar este articulo?")
    this.updateArticleStatus(article.id,"rechazado");
    console.log('Artículo rechazado:', article);
  }

  
  updateArticleStatus(id:string, status: string): void {
    // Enviar solicitud al backend para modificar el estado del artículo
    const body = { estado: status };

    this.http.patch(`http://localhost:3000/articulos/${id}`, body).subscribe(
      (response: any) => {
        console.log('Estado modificado');
     
      },
      (error) => {
        console.error('Error al modificar el estado del artículo:', error);
      }
    );
   
  }

  getArticles() {
    this.http.get<Article[]>('http://localhost:3000/articulos').subscribe(
      (response) => {
       
        this.articles = response;
        console.log(this.articles)
        let pendientes = []
        console.log(this.articles)
       for (let i=0; i< this.articles.length; i++){
        if (this.articles[i].estado == "pendiente"){
          pendientes.push(this.articles[i])
          console.log(pendientes)
       }
      
      }
      this.articles =pendientes
      },
      (error) => {
        console.error(error);
      }
    );
  }

 
}

