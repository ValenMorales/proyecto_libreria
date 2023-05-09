import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main2Component } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component: Main2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
