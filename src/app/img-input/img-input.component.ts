import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-img-input',
  templateUrl: './img-input.component.html',
  styleUrls: ['./img-input.component.scss']
})
export class ImgInputComponent implements OnInit {

  image: string; 
  @Output() img = new EventEmitter<string>(); 
  @Input() set inImage(img){
    this.image = img;
  }

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
    this.img.emit(this.image);
  }
}
