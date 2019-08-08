import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styleUrls: ['./new-pokemon.component.scss']
})
export class NewPokemonComponent implements OnInit {

  pokemon: Pokemon = {
    id: 0, name: "Имя", types: [], height: 0, weight: 0, genderMale: false, genderFemale: false, category: [], abilities: [], weaknesses: [], hp: 1, attack: 1, defense: 1,
    specialAttack: 1, specialDefense: 1, speed: 1, description: "", image: "", rarity: "Usual"
  };  

  constructor() { }

  ngOnInit() {    
  }
  setArea(value:any):void {
    this.pokemon.image = value.image;
    this.pokemon.types = value.types;
    this.pokemon.name = value.name;   
    this.pokemon.rarity = value.rarity;     
  }        
     
  setParameters(parameters: any) :void {    
    this.pokemon.height = parameters.height;
    this.pokemon.weight = parameters.weight;
    this.pokemon.genderMale = parameters.genderMale;
    this.pokemon.genderFemale = parameters.genderFemale;       
  }  
  setAbilities(list: string[]):void {
    this.pokemon.abilities = list;    
  }
  setCategory(list: string[]):void {
    this.pokemon.category = list;    
  }
  setWeakesses(weaknesses:string[]):void {
    this.pokemon.weaknesses = weaknesses;    
  }
}
