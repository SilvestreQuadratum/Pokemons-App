import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonsUrl = 'api/pokemons';
  
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl)
    .pipe(
      catchError(this.handleError<Pokemon[]>('getPokemons', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        
      console.error(error); 
      
      return of(result as T);
    };
  }
}
