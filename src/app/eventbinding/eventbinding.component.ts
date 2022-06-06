import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `

  <h2>Welcome {{name}}</h2>
  <button (click)="onClick()">Greet</button>
  {{greeting}}

  <button (click)="onClickk($event)">Greet</button>

  <button (click)="greeting = 'Welcome {{name}}'">Greet</button>
  `,
  styles: []
})
export class EventbindingComponent implements OnInit {

  public name = "Ayub";
  public greeting = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('Welcome {{name}}');
    this.greeting = 'Welcome {{name}}';
  }
  onClickk(event:any){
    console.log(event);
    this.greeting = event.type;
  }
}
