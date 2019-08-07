import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.scss']
})
export class InputListComponent implements OnInit {

  @Output() outList = new EventEmitter<string[]>();
  @Input() inList: string[];
  list: string[] = [];
  constructor() { }

  ngOnInit() {
    this.list = this.inList;
  }

  AddItem(item: string):void {
    let isAdding = true;
    this.list.forEach(el => {
      if(el == item) isAdding=false;
    });
    if(isAdding) this.list.push(item);  
    this.ChangeList();  
  }
  DeleteItem(item: string):void {
    this.list = this.list.filter(el => el != item);
    this.ChangeList();
  }
  ChangeList():void {
    this.outList.emit(this.list);
  }
}
