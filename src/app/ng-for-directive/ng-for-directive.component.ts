import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  template: `
  <div *ngFor="let color of colors; even as e">
  <h2>{{e}} {{color}}</h2>
  </div>
  `,
  styles: []
})
export class NgForDirectiveComponent implements OnInit {


  public colors = ['red','blue','green','yellow']
  constructor() { }

  ngOnInit(): void {
  }

}
