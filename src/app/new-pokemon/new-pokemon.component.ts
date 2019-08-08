import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';

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
  
  constructor(
    private location: Location,
    private servicePokemon: PokemonService
    ) { }

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
  setHp(value: any):void {  
    if(isNaN(+value)) value = 1;
    if(value < 0) value = 1;
    if(value > 10) value = 10;
    this.pokemon.hp = +value;          
  }
  setAttack(value: any):void {
    if(isNaN(+value)) value = 1;
    if(value < 0) value = 1;
    if(value > 10) value = 10;
    this.pokemon.attack = +value;
  }
  setDefense(value: any):void {
    if(isNaN(+value)) value = 1;
    if(value < 0) value = 1;
    if(value > 10) value = 10;
    this.pokemon.defense = +value;
  }
  setSpecialAttack(value: any):void {
    if(isNaN(+value)) value = 1;
    if(value < 0) value = 1;
    if(value > 10) value = 10;
    this.pokemon.specialAttack = +value;
  }
  setSpecialDefense(value: any):void {
    if(isNaN(+value)) value = 1;
    if(value < 0) value = 1;
    if(value > 10) value = 10;
    this.pokemon.specialDefense = +value;
  }
  setSpeed(value: any):void {
    if(isNaN(+value)) value = 1;
    if(value < 0) value = 1;
    if(value > 10) value = 10;
    this.pokemon.speed = +value;
  }  
  Save():void {
    this.servicePokemon.AddPokemon(this.pokemon).subscribe(() => this.goBack());      
  }
  goBack():void {
    this.location.back();
  }
}
