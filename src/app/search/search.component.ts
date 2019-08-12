import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pokemons$: Observable<Pokemon[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe(      
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonService.searchPokemons(term)),
    )
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }  
}
