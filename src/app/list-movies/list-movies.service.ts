import { Injectable, OnInit } from '@angular/core';
import { MoviesCatalogoService } from '../services-shared/moviesCatalogo.service';
import { Observable } from 'rxjs';

@Injectable()
export class ListMoviesService {

  constructor(private service: MoviesCatalogoService) { }

	public listMovies(): Observable<any> {
		return this.service.listAllMovies();
	}

	public listDetails(): any {
		return null;
	}

	public getResultObject(obj: any): any {
		return obj.results;
	}
  
}
