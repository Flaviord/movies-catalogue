import { Component, OnInit } from '@angular/core';
import { ListMoviesService } from './list-movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  public listMovies:Array<any> = [];

  constructor(private service: ListMoviesService) { }

	ngOnInit() {
		this.service.listMovies()
			.subscribe(
				res => this.listMovies = this.service.getResultObject(res),
				err => console.log('Error handler to showing List Movies.')
			)
	}

}
