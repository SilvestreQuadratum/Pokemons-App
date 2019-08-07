import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss']
})
export class InputboxComponent implements OnInit {

  @Output() out = new EventEmitter<string>();  
  @Input() value: string;

  constructor() { }

  ngOnInit() {
    if(!this.value) {
      this.value = "";
    }
  }
  setValue(val:string):void {
    this.out.emit(val);
  }
}
