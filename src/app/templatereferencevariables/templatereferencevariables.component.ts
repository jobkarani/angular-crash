import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereferencevariables',
  template: `
  <h2>Welcome {{name}}</h2>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styles: []
})
export class TemplatereferencevariablesComponent implements OnInit {

  public name = "Ayub";
  constructor() { }

  ngOnInit(): void {
  }
  logMessage(value:any){
    console.log(value);
  }
}
