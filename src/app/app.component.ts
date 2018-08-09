import { Component, OnInit } from '@angular/core';
import { MoviesCatalogoService } from './services-shared/moviesCatalogo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-catalogue';

  constructor(private service: MoviesCatalogoService) {}

	ngOnInit() {
		// this.service.listAllMovies().subscribe(
		// 	res => console.log(res),
		// 	err => console.log('Error!'));
	}

}
