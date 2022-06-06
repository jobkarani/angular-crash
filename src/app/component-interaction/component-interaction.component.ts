import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
  <!-- <h2>{{"hello" + parentData}}</h2> -->
  <h2>{{"hello" + name}}</h2>
  `,
  styles: []
})
export class ComponentInteractionComponent implements OnInit {


  // @Input() public parentData:any;
  @Input('parentData') public name:any;

  constructor() { }

  ngOnInit(): void {
  }

}
