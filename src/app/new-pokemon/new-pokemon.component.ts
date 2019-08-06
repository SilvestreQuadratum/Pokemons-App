import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-new-pokemon',
  templateUrl: './new-pokemon.component.html',
  styleUrls: ['./new-pokemon.component.scss']
})
export class NewPokemonComponent implements OnInit {

  pokemon: Pokemon = {
    id: 0, name: "", types: [], height: 0, weight: 0, gender: [], category: [], abilities: [], weaknesses: [], hp: 1, attack: 1, defense: 1,
    specialAttack: 1, specialDefense: 1, speed: 1, description: "", image: "" 
  };  
  isType1: boolean = false;
  isType2: boolean = false;
  typesPokemons = [
    {name: "Нет", modificator: "None"},
    {name: "Электричество", modificator: "Electric"},
    {name: "Огонь", modificator: "Fire"},
    {name: "Вода", modificator: "Water"}
  ];

  constructor() { }

  ngOnInit() {
  }

  getImage(img: any): void {
    this.pokemon.image = img;
    console.log(this.pokemon);
  }
  setName(name: any):void {
    this.pokemon.name = name.target.value
  }
  setType(val: any, el: string): void {
    let type1 = document.getElementById(el);
    let type2;
    if(el == "Type1") type2 = document.getElementById("Type2");
    if(el == "Type2") type2 = document.getElementById("Type1");
    
    this.typesPokemons.forEach(el => {
      let classType = "pokemon__types_" + el.modificator;
      if(type1.classList.contains(classType)) {
        type1.classList.remove(classType);
      }
    });
    this.pokemon.types = [];
    let str = "pokemon__types_" + val.modificator;
    if(val.modificator != "None" && !type2.classList.contains(str)) {      
      type1.classList.add(str);      
      this.AddTypes(type1);
      this.AddTypes(type2);      
    }
  }
  toggleType(value: string): void {
    if(value == 'type1') {
      this.isType1=!this.isType1;
      this.isType2=false;
    }
    if(value == 'type2') {
      this.isType2=!this.isType2;
      this.isType1=false;
    }
  }
  AddTypes(el: any): void {    
    el.classList.forEach(Tclass => {      
      switch (Tclass) {
        case "pokemon__types_Electric": this.pokemon.types.push("Electric"); break; 
        case "pokemon__types_Fire": this.pokemon.types.push("Fire"); break; 
        case "pokemon__types_Water": this.pokemon.types.push("Water"); break;      
        default:
          break;
      }
    });
  }
}
