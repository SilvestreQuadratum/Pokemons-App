import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img-input',
  templateUrl: './img-input.component.html',
  styleUrls: ['./img-input.component.scss']
})
export class ImgInputComponent implements OnInit {

  @Output() image: string;

  constructor() { }

  ngOnInit() {
  }

  onFileChange(event):void {
    if(event.target.files.length > 0) 
    {
      this.image = "assets/images/pokemons/" + event.target.files[0].name;      
    } else {
      this.image = null;
    }
  }
}
