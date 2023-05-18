import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeadminComponent } from './components/homeadmin/homeadmin.component';
import { InternalServerErrorComponent } from './public/errors/internal-server-error/internal-server-error.component';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PerfilComponent } from './perfil/perfil.component';
import { GestionadminComponent } from './components/gestionadmin/gestionadmin.component';
import { GestionautorComponent } from './components/gestionautor/gestionautor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HomeComponent,
    ArticlesComponent,
    SignupComponent,
    LoginComponent,
    HomeadminComponent,
    InternalServerErrorComponent,
    NotFoundComponent,
    PerfilComponent,
    GestionadminComponent,
    GestionautorComponent,

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
