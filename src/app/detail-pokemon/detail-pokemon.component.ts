import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  @Input() set inPokemon(pokemon: Pokemon) {
    this.pokemon = pokemon;
    this.setRarity(this.pokemon.rarity);
    this.setTypes(this.pokemon.types[0], this.pokemon.types[1]);
    this.setWeaknesses(this.pokemon.weaknesses);
    this.setGender(this.pokemon.genderMale, this.pokemon.genderFemale);        
  }

  pokemon: Pokemon;
  id: any;
  rarityBool = [false, false, false, false, false];
  BoolClass = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  BoolClass2 = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  BoolClass3 = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  ];
  male = "Нет";
  female = "Нет";

  constructor(
    private location: Location,
    private route: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {

  }

  setRarity(rarity: string) {
    switch (rarity) {
      case "Usual":
        this.rarityBool[0] = true;
        this.pokemon.rarity = "Обычный"
        break;
      case "Rare":
        this.rarityBool[1] = true;
        this.pokemon.rarity = "Необычный"
        break;
      case "VeryRare":
        this.rarityBool[2] = true;
        this.pokemon.rarity = "Редкий"
        break;
      case "Epic":
        this.rarityBool[3] = true;
        this.pokemon.rarity = "Эпический"
        break;
      case "Legendary":
        this.rarityBool[4] = true;
        this.pokemon.rarity = "Легендарный"
        break;
      default:
        break;
    }
  }
  setTypes(type1: string, type2: string) {
    switch (type1) {
      case "Electric":
        this.BoolClass[1]=true;
        this.pokemon.types[0]="Электричество";
        break;
      case "Fire":
          this.BoolClass[2]=true;
          this.pokemon.types[0]="Огонь";
        break;
      case "Water":
          this.BoolClass[3]=true;
          this.pokemon.types[0]="Вода";
        break;
      case "Psychic":
          this.BoolClass[4]=true;
          this.pokemon.types[0]="Мистик";
        break;
      case "Ground":
          this.BoolClass[5]=true;
          this.pokemon.types[0]="Земля";
        break;
      case "Normal":
          this.BoolClass[6]=true;
          this.pokemon.types[0]="Обычный";
        break;
      case "Flying":
          this.BoolClass[7]=true;
          this.pokemon.types[0]="Летающий";
        break;
      case "Bug":
          this.BoolClass[8]=true;
          this.pokemon.types[0]="Жук";
        break;
      case "Fighting":
          this.BoolClass[9]=true;
          this.pokemon.types[0]="Боец";
        break;
      case "Grass":
          this.BoolClass[10]=true;
          this.pokemon.types[0]="Трава";
        break;
      case "Fairy":
          this.BoolClass[11]=true;
          this.pokemon.types[0]="Фея";
        break;
      case "Ice":
          this.BoolClass[12]=true;
          this.pokemon.types[0]="Лёд";
        break;
      case "Poison":
          this.BoolClass[13]=true;
          this.pokemon.types[0]="Яд";
        break;
      case "Rock":
          this.BoolClass[14]=true;
          this.pokemon.types[0]="Камень";
        break;
      case "Steel":
          this.BoolClass[15]=true;
          this.pokemon.types[0]="Сталь";
        break;
      case "Dragon":
          this.BoolClass[16]=true;
          this.pokemon.types[0]="Дракон";
        break;
      case "Ghost":
          this.BoolClass[17]=true;
          this.pokemon.types[0]="Призрак";
        break;
      default: break;
    }
    switch (type2) {
      case "Electric":
        this.BoolClass2[1]=true;
        this.pokemon.types[1]="Электричество";
        break;
      case "Fire":
          this.BoolClass2[2]=true;
          this.pokemon.types[1]="Огонь";
        break;
      case "Water":
          this.BoolClass2[3]=true;
          this.pokemon.types[1]="Вода";
        break;
      case "Psychic":
          this.BoolClass2[4]=true;
          this.pokemon.types[1]="Мистик";
        break;
      case "Ground":
          this.BoolClass2[5]=true;
          this.pokemon.types[1]="Земля";
        break;
      case "Normal":
          this.BoolClass2[6]=true;
          this.pokemon.types[1]="Обычный";
        break;
      case "Flying":
          this.BoolClass2[7]=true;
          this.pokemon.types[1]="Летающий";
        break;
      case "Bug":
          this.BoolClass2[8]=true;
          this.pokemon.types[1]="Жук";
        break;
      case "Fighting":
          this.BoolClass2[9]=true;
          this.pokemon.types[1]="Боец";
        break;
      case "Grass":
          this.BoolClass2[10]=true;
          this.pokemon.types[1]="Трава";
        break;
      case "Fairy":
          this.BoolClass2[11]=true;
          this.pokemon.types[1]="Фея";
        break;
      case "Ice":
          this.BoolClass2[12]=true;
          this.pokemon.types[1]="Лёд";
        break;
      case "Poison":
          this.BoolClass2[13]=true;
          this.pokemon.types[1]="Яд";
        break;
      case "Rock":
          this.BoolClass2[14]=true;
          this.pokemon.types[1]="Камень";
        break;
      case "Steel":
          this.BoolClass2[15]=true;
          this.pokemon.types[1]="Сталь";
        break;
      case "Dragon":
          this.BoolClass2[16]=true;
          this.pokemon.types[1]="Дракон";
        break;
      case "Ghost":
          this.BoolClass2[17]=true;
          this.pokemon.types[1]="Призрак";
        break;
      default: break;
    }
  }

  setWeaknesses(weaknesses: string[]):void {
    for (let index = 0; index < weaknesses.length; index++) {      
      let position = this.getPositionWeakness(weaknesses[index]);
      let name = this.getNameWeakness(weaknesses[index]);
      this.pokemon.weaknesses[index]=name;
      this,this.BoolClass3[index][position]=true;
    }
  }
  getPositionWeakness(weakness: string):number {
    switch (weakness) {
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
  getNameWeakness(weakness:string):string {
    switch (weakness) {
      case "Electric": return "Электричество";
      case "Fire": return "Огонь";
      case "Water": return "Вода";
      case "Psychic": return "Мистик";
      case "Ground": return "Земля";
      case "Normal": return "Обычный";
      case "Flying": return "Летающий";
      case "Bug": return "Жук";
      case "Fighting": return "Боец";
      case "Grass": return "Трава";
      case "Fairy": return "Фея";
      case "Ice": return "Лёд";
      case "Poison": return "Яд";
      case "Rock": return "Камень";
      case "Steel": return "Сталь";
      case "Dragon": return "Дракон";
      case "Ghost": return "Призрак";
      default: return "";
    }
  }
  setGender(male:boolean, female:boolean):void {
    if(male) this.male = "Есть";
    if(female) this.female = "Есть";
  }
  deletePokemon(): void {    
    this.pokemonService.deletePokemon(this.pokemon).subscribe(() => this.goBack());
  }
  goBack():void {
    this.location.back();
  }
  goEdit():void {
    this.route.navigate(['edit/'+this.pokemon.id]);
  }
}