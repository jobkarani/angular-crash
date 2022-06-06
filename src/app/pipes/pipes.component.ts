import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{name | slice:2:4 }}</h2>
  <h2>{{person| json }}</h2>

  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'3.4-5'}}</h2>
  <h2>{{5.678 | number:'3.1-2'}}</h2>
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
