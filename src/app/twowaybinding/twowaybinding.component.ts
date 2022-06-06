import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  template: `
  <input [(ngModel)]="name" type="text">
  {{name}}

  `,
  styles: []
})
export class TwowaybindingComponent implements OnInit {


  public name = "";

  constructor() { }

  ngOnInit(): void {
  }

}
