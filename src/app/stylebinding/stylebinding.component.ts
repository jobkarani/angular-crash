import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
  <h2>Welcome {{name}}</h2>
  <h2 [style.color ]= "'orange'">Styles binding</h2>
  <h2 [style.color ]= "hasError ? 'red' : 'green' ">Styles binding</h2>
  <h2 [style.color ]= "'highlighColor'">Styles binding 2</h2>
  <h2 [ngStyle]="titleStyles">Styles binding 3</h2>
  `,
  styles: []
})
export class StylebindingComponent implements OnInit {

  public name = "Ayub";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
