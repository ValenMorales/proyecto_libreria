import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeadminComponent } from './components/homeadmin/homeadmin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GestionadminComponent } from './components/gestionadmin/gestionadmin.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "articles",
    component: ArticlesComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "homeadmin",
    component: HomeadminComponent
  },
  {
    path:"perfil",
    component: PerfilComponent
  },
  {
    path: "gestionadmin",
    component:GestionadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
