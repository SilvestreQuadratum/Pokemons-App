import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  @Output() outParam = new EventEmitter<any>();
  @Input() inParam: any;
  parameters = {
    height: 0,
    weight: 0,
    genderMale: false,
    genderFemale: false
  };

  constructor() { }

  ngOnInit() {
    if(this.inParam) {
      this.parameters.height = this.inParam.height;
      this.parameters.weight = this.inParam.weight;
      this.parameters.genderFemale = this.inParam.genderFemale;
      this.parameters.genderMale = this.inParam.genderMale;
    }
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
