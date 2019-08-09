import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  RarityBool = [false, false, false, false, false];
  BoolClass = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  BoolClass2 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  pokemon:Pokemon;
  @Input() set inPokemon(pokemon:Pokemon){    
    this.pokemon = pokemon;
    let index1: number = 0;
    let index2: number = 0;
    if(this.pokemon.types[0]) index1 = this.getIndexOfType(this.pokemon.types[0]);    
    if(this.pokemon.types[1]) index2 = this.getIndexOfType(this.pokemon.types[1]);
    this.BoolClass[index1] = true;
    this.BoolClass2[index2] = true;
    this.setRarity(this.pokemon.rarity);
  };  

  constructor() { }

  ngOnInit() {
  }
  setRarity(rarity: string): void { 
    switch (rarity) {
      case "Usual":
        this.RarityBool[0] = true;        
        break;
      case "Rare":
        this.RarityBool[1] = true;        
        break;
      case "VeryRare":
        this.RarityBool[2] = true;        
        break;
      case "Epic":
        this.RarityBool[3] = true;        
        break;
      case "Legendary":
        this.RarityBool[4] = true;        
        break;
      default:
        break;
    }    
  }
  getIndexOfType(str: string): number {
    switch (str) {
      case "Electric": return 1;
      case "Fire": return 2;
      case "Water": return 3;
      case "Psychic": return 4;
      case "Ground": return 5;
      case "Normal": return 6;
      case "Flying": return 7;
      case "Bug": return 8;
      case "Fighting": return 9;
      case "Grass": return 10;
      case "Fairy": return 11;
      case "Ice": return 12;
      case "Poison": return 13;
      case "Rock": return 14;
      case "Steel": return 15;
      case "Dragon": return 16;
      case "Ghost": return 17;
      default: return 0;
    }
  }
}
