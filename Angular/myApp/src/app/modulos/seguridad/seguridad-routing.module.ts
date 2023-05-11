import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAutorComponent } from './login-autor/login-autor.component';
import { LogoutAdminComponent } from './logout-admin/logout-admin.component';
import { LogoutAutorComponent } from './logout-autor/logout-autor.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

const routes: Routes = [
  {
    path:"login-autor",
    component: LoginAutorComponent
  },
  {
    path:'logout-autor',
    component: LogoutAutorComponent
  },
  {
    path:'logout-admin',
    component: LogoutAdminComponent
  },
  {
    path:'login-admin',
    component: LoginAdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
