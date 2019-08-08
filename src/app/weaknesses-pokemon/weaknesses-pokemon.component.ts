import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { WeaknessesTypes } from '../weaknesses-types';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-weaknesses-pokemon',
  templateUrl: './weaknesses-pokemon.component.html',
  styleUrls: ['./weaknesses-pokemon.component.scss']
})
export class WeaknessesPokemonComponent implements OnInit {

  isLoad = false;
  typelist = [];
  list: WeaknessesTypes[] = [];
  result: string[] = [];
  @Output() outweaknesses = new EventEmitter<string[]>();
  @Input() set value(str: string[]) { // загружаем только при инициализации
    if (str.length > 0) // первое обращение с 0
      if (!this.isLoad) {
        this.isLoad = true;
        str.forEach(el => {
          for (let i = 0; i < this.list.length; i++) {
            if (el == this.list[i].modificator) {
              this.setWeaknesses(this.list[i].modificator, i);
            }
          }
        });
      }
  }

  constructor(private servivePokemon: PokemonService) { }

  ngOnInit() {
    this.servivePokemon.getPokemonTypes()
      .subscribe(arr => this.typelist = arr);
    this.InputList(this.typelist);
  }

  setWeaknesses(name: string, index: any): void {
    this.list[index].checked = !this.list[index].checked;
    let isBool = false;
    this.result.forEach(el => {
      if (el == name) isBool = true;
    });
    if (isBool) {
      this.result = this.result.filter(el => el != name);
    } else {
      this.result.push(name);
    }
    this.outweaknesses.emit(this.result);
  }

  InputList(list: any): void {
    for (let i = 0; i < list.length; i++) {
      let el: WeaknessesTypes = new WeaknessesTypes();
      el.name = list[i].name;
      el.modificator = list[i].modificator;
      if (list.checked) el.checked = list[i].checked;
      this.list.push(el);
    }
  }

}
