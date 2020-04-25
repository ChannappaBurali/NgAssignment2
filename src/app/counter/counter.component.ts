import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  data:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  addNumber():void{
    this.data+=1;
  }
  resetNumber(): void{
    this.data-=this.data;
  }
}
