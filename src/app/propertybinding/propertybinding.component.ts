import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
  <h2>Welcome {{name}}</h2>
  <input  [id]="myId" type="text" value="Ayub">
  <input [disabled]="false"  id="{{myId}}" type="text" value="Ayub">
  <input [disabled]="isDisabled"  id="{{myId}}" type="text" value="Ayub">
  <input bind-disabled="isDisabled"  id="{{myId}}" type="text" value="Ayub">
  `,
  styles: []
})
export class PropertybindingComponent implements OnInit {

  public name = "Ayub";
  public myId = "AyubId";
  public isDisabled = "True";
  constructor() { }

  ngOnInit(): void {
  }

}
