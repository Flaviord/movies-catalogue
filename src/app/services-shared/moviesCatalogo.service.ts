import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MoviesCatalogoService {
    constructor(private http: HttpClient){}
    
    public listAllMovies() : Observable<any> {
        return this.http.get<any>(`https://swapi.co/api/films/`);
    }
}