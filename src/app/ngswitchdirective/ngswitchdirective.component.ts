import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchdirective',
  template: `
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You picked the red color!</div>
  <div *ngSwitchCase="'blue'">You picked the blue color!</div>
  <div *ngSwitchCase="'grey'">You picked the grey color!</div>
  <div *ngSwitchDefault>Pick again!!!</div>
  </div>
  `,
  styles: []
})
export class NgswitchdirectiveComponent implements OnInit {

  public color = "red";

  constructor() { }

  ngOnInit(): void {
  }

}
