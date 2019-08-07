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

  pokemonTypes = [
    {name: "Нет", modificator: "None"},
    {name: "Электричество", modificator: "Electric"},
    {name: "Огонь", modificator: "Fire"},
    {name: "Вода", modificator: "Water"},
    {name: "Мистик", modificator: "Psychic"},
    {name: "Земля", modificator: "Ground"},
    {name: "Нормальный", modificator: "Normal"},
    {name: "Летающий", modificator: "Flying"},
    {name: "Жук", modificator: "Bug"},
    {name: "Боец", modificator: "Fighting"},
    {name: "Трава", modificator: "Grass"},
    {name: "Фея", modificator: "Fairy"},
    {name: "Лёд", modificator: "Ice"},
    {name: "Яд", modificator: "Poison"},
    {name: "Камень", modificator: "Rock"},
    {name: "Сталь", modificator: "Steel"},
    {name: "Дракон", modificator: "Dragon"},
    {name: "Призрак", modificator: "Ghost"}
  ];
  
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl)
    .pipe(
      catchError(this.handleError<Pokemon[]>('getPokemons', []))
    );
  }

  getPokemonTypes(): Observable<any[]>{
    return of(this.pokemonTypes);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        
      console.error(error); 
      
      return of(result as T);
    };
  }
}
