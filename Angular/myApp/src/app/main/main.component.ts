import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  logo:String="assets/images/informacion.png"
  imageSalud:String="assets/images/collageSalud.png";
  imageEstudiosSociales:String="assets/images/EstudiosEmpresariales.png"
  imageIngenieria:String="assets/images/ingenieria.png";

  constructor(
    private router:Router
  ){

  }

  ngOnInit(): void {
    console.log("entre a main");
  }

  redirectLogin(){
    this.router.navigate(['login']).then();
  }
  
}

