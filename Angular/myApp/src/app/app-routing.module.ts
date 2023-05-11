import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';
// creacion de las rutas 
const routes: Routes = [
  {
   path: 'home',
   component: HomeComponent
  },
  // si no se especifica la ruta,
// redirigir a home
  {
    path: '',
    pathMatch : "full",
    redirectTo: "/home"
  },

   {
    path: "seguridad",
    loadChildren:() => import ("./modulos/seguridad/seguridad.module").then (x =>x.SeguridadModule)
   },

    // si me pide una ruta inexistente 
  {
    path: '**',
    component: NotFoundComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
