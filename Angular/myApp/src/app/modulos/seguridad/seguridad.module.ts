import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';


import { LogoutAutorComponent } from './logout-autor/logout-autor.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginAutorComponent } from './login-autor/login-autor.component';
import { LogoutAdminComponent } from './logout-admin/logout-admin.component';





@NgModule({
  declarations: [

    LogoutAutorComponent,
    LoginAdminComponent,
    LoginAutorComponent,
    LogoutAdminComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
