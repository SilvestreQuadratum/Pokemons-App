import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  parameters = {
    height: 0,
    weight: 0,
    genderMale: false,
    genderFemale: false
  };

  @Output() outParam = new EventEmitter<any>();
  @Input() set inParam(pokemon:any )  
  {
    this.setFemale(pokemon.genderFemale);
    this.setMale(pokemon.genderMale);
    this.setHeight(pokemon.height);
    this.setWeight(pokemon.weight);
  }
  

  constructor() { }

  ngOnInit() {    
  }

  setHeight(val: string):void {
    this.parameters.height = +val;
  }
  setWeight(val: string):void {
    this.parameters.weight = +val;        
  }
  setMale(val: boolean):void {
    this.parameters.genderMale = val;
  }
  setFemale(val: boolean):void {
    this.parameters.genderFemale = val;
  }
  setParameters():void {
    this.outParam.emit(this.parameters);
  }

}
