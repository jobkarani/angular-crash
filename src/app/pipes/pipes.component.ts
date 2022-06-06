import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{name | slice:2:4 }}</h2>
  <h2>{{person| json }}</h2>
  `,
  styles: []
})
export class PipesComponent implements OnInit {

  public name = "Ayub";
  public message = "Welcome to NgCrash";
  public person = {
    "fname" : "john",
    "lname" : "doe"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
