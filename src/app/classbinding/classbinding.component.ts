import { TreeError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template: `
  <h2>Welcome {{name}}</h2>
  <h2 class="text-success">Ayub</h2>
  <h2 [class]="successClass">Ayub</h2>

  <h2 class="text-special" [class]="successClass">Ayub</h2>
  <h2 [class.text-danger]="hasError" >Ayub</h2>

  <h2 [ngClass]="messageClasses">Ayub</h2>
  `,
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class ClassbindingComponent implements OnInit {

  public name = "Ayub";
  public successClass = "text-success";
  public isSpecial= true;
  public hasError = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
