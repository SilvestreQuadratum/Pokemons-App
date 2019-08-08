import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-area-input',
  templateUrl: './area-input.component.html',
  styleUrls: ['./area-input.component.scss']
})
export class AreaInputComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  @Output() outArea = new EventEmitter<any>();
  @Input() set inPokemon(pokemon: Pokemon) {
    this.pokemon = pokemon;
    let index1 = this.getIndexOfType(this.pokemon.types[0]);
    let index2 = this.getIndexOfType(this.pokemon.types[1]);
    this.BoolClass[index1] = true;
    this.BoolClass2[index2] = true;
    this.setRarity(this.pokemon.rarity);
  }
  color1 = "yellow";
  BoolClass = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  BoolClass2 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  RarityBool = [false, false, false, false, false];
  rarityPokemons = ["usual", "rare", "veryRare", "epic", "legendary"];
  isType1: boolean = false;
  isType2: boolean = false;
  typesPokemons = [];
  pokemon = {
    types: [],
    name: "",
    image: "",
    rarity: ""
  };

  ngOnInit() {
    this.pokemonService.getPokemonTypes()
      .subscribe(arr => this.typesPokemons = arr);
  }
  getImage(img: any): void {
    this.pokemon.image = img;
    this.outArea.emit(this.pokemon);
  }

  toggleType(value: string): void {
    if (value == 'type1') {
      this.isType1 = !this.isType1;
      this.isType2 = false;
    }
    if (value == 'type2') {
      this.isType2 = !this.isType2;
      this.isType1 = false;
    }
  }
  setType1(modificator: string, index: number): void {
    for (let i = 0; i < 18; i++) {
      this.BoolClass[i] = false;
    }
    this.BoolClass[index] = true;
    this.pokemon.types = [];
    if (modificator != "None") this.pokemon.types.push(modificator);
    let val = this.getTypeOfIndex(2);
    if (val != "None") this.pokemon.types.push(val);
    this.outArea.emit(this.pokemon);
  }
  setType2(modificator: string, index: number): void {
    for (let i = 0; i < 18; i++) {
      this.BoolClass2[i] = false;
    }
    this.BoolClass2[index] = true;
    this.pokemon.types = [];
    if (modificator != "None") this.pokemon.types.push(modificator);
    let val = this.getTypeOfIndex(1);
    if (val != "None") this.pokemon.types.push(val);
    this.outArea.emit(this.pokemon);
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
  getTypeOfIndex(isType: number): string {
    let val: any;
    let index: number = 0;
    if (isType == 1) val = this.BoolClass;
    if (isType == 2) val = this.BoolClass2;
    for (let i = 1; i < 18; i++) {
      if (val[i]) {
        index = i;
        break;
      }
    }
    switch (index) {
      case 1: return "Electric";
      case 2: return "Fire";
      case 3: return "Water";
      case 4: return "Psychic";
      case 5: return "Ground";
      case 6: return "Normal";
      case 7: return "Flying";
      case 8: return "Bug";
      case 9: return "Fighting";
      case 10: return "Grass";
      case 11: return "Fairy";
      case 12: return "Ice";
      case 13: return "Poison";
      case 14: return "Rock";
      case 15: return "Steel";
      case 16: return "Dragon";
      case 17: return "Ghost";
      default: return "None";
    }
  }
  setName(): void {
    this.outArea.emit(this.pokemon);
  }
  setRarity(rarity: string): void {    
    for (let i = 0; i < 5; i++) {
      this.RarityBool[i] = false;
    }
    switch (rarity) {
      case "Usual":
        this.RarityBool[0] = true;
        this.pokemon.rarity = "Usual";
        break;
      case "Rare":
        this.RarityBool[1] = true;
        this.pokemon.rarity = "Rare";
        break;
      case "VeryRare":
        this.RarityBool[2] = true;
        this.pokemon.rarity = "VeryRare";
        break;
      case "Epic":
        this.RarityBool[3] = true;
        this.pokemon.rarity = "Epic";
        break;
      case "Legendary":
        this.RarityBool[4] = true;
        this.pokemon.rarity = "Legendary";
        break;
      default:
        break;
    }
    this.outArea.emit(this.pokemon);
  }
}
