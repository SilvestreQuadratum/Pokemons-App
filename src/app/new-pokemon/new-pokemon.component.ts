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
    specialAttack: 1, specialDefense: 1, speed: 1, description: "", image: "", rarity: "Usual"
  };  
  isType1: boolean = false;
  isType2: boolean = false;
  typesPokemons = [
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
  rarityPokemons = ["usual","rare","veryRare","epic","legendary"];

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
  setType(val: any, type1: any, type2: any): void {
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
        case "pokemon__types_Psychic": this.pokemon.types.push("Psychic"); break;  
        case "pokemon__types_Ground": this.pokemon.types.push("Ground"); break;  
        case "pokemon__types_Normal": this.pokemon.types.push("Normal"); break;  
        case "pokemon__types_Flying": this.pokemon.types.push("Flying"); break;  
        case "pokemon__types_Bug": this.pokemon.types.push("Bug"); break;  
        case "pokemon__types_Fighting": this.pokemon.types.push("Fighting"); break;  
        case "pokemon__types_Grass": this.pokemon.types.push("Grass"); break;  
        case "pokemon__types_Fairy": this.pokemon.types.push("Fairy"); break;  
        case "pokemon__types_Ice": this.pokemon.types.push("Ice"); break;  
        case "pokemon__types_Poison": this.pokemon.types.push("Poison"); break;  
        case "pokemon__types_Rock": this.pokemon.types.push("Rock"); break;  
        case "pokemon__types_Steel": this.pokemon.types.push("Steel"); break;  
        case "pokemon__types_Dragon": this.pokemon.types.push("Dragon"); break;  
        case "pokemon__types_Ghost": this.pokemon.types.push("Ghost"); break;              
        default:
          break;
      }
    });
  }
  setRarity(rarity: string, target: any): void {    
    this.pokemon.rarity = rarity;    
    this.rarityPokemons.forEach(rar => {
      let searchRarity = "pokemon__area_" + rar;
      if(target.classList.contains(searchRarity)) target.classList.remove(searchRarity);
    });
    let addedRarity = "pokemon__area_";
    switch (rarity) {        
      case "rare":
      case "veryRare": 
      case "epic": 
      case "legendary": 
        addedRarity = addedRarity + rarity; 
        target.classList.add(addedRarity);
        break;  
      default:
        break;
    }
  }
  setDescription(el:any): void {
    this.pokemon.description = el.value;
  }
}
