import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilautorComponent } from './perfilautor/perfilautor.component';
import { PerfiladminComponent } from './perfiladmin/perfiladmin.component';



@NgModule({
  declarations: [
    PerfilautorComponent,
    PerfiladminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PerfilesModule { }
