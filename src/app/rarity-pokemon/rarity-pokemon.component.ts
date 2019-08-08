import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rarity-pokemon',
  templateUrl: './rarity-pokemon.component.html',
  styleUrls: ['./rarity-pokemon.component.scss']
})
export class RarityPokemonComponent implements OnInit {

  @Output() outRarity = new EventEmitter<string>();  

  constructor() { }

  ngOnInit() {
  }

  setRarity(value:string):void {
    this.outRarity.emit(value);
  }

}
