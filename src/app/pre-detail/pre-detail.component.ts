import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pre-detail',
  templateUrl: './pre-detail.component.html',
  styleUrls: ['./pre-detail.component.scss']
})
export class PreDetailComponent implements OnInit {

  pokemon: Pokemon = {
    id: 0, name: "Имя", types: [], height: 0, weight: 0, genderMale: false, genderFemale: false, category: [], abilities: [], weaknesses: [], hp: 1, attack: 1, defense: 1,
    specialAttack: 1, specialDefense: 1, speed: 1, description: "", image: "", rarity: "Usual"
  };

  constructor(
    private route: ActivatedRoute,
    private servicePokemon: PokemonService
    ) { }

  ngOnInit() {    
    this.getPokemon(+this.route.snapshot.paramMap.get('id'));
  }
  getPokemon(id: number): void {
    this.servicePokemon.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);          
  }  
}
