import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
  <!-- <h2>{{"hello" + parentData}}</h2> -->
  <h2>{{"hello" + name}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class ComponentInteractionComponent implements OnInit {


  // @Input() public parentData:any;
  @Input('parentData') public name:any;

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hey Ayub!')
  }
}
