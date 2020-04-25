import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbies:string;
  constructor() { }

  ngOnInit(): void {
  }
  getValue(value: string) { 
    if(this.hobbies.length>0){
    console.log("previous value ", this.hobbies);
    }
  console.log("new value ", value);
  this.hobbies = value
  }
  
  ngDoCheck() {
    this.hobbies = ((<HTMLInputElement>document.getElementById('inputId')).value)
}
}
