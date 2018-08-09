import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesCatalogoService } from './services-shared/moviesCatalogo.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { ListMoviesService } from './list-movies/list-movies.service';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule
  ],
  providers: [
  	MoviesCatalogoService,
  	ListMoviesService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
