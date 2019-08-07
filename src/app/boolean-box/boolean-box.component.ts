import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-boolean-box',
  templateUrl: './boolean-box.component.html',
  styleUrls: ['./boolean-box.component.scss']
})
export class BooleanBoxComponent implements OnInit {

  @Output() out = new EventEmitter<boolean>();
  @Input() value: boolean = false;

  constructor() { }

  ngOnInit() {    
  }  
  setValue():void {
    this.out.emit(this.value);
  }  
}
