import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
  <!-- BASIC TRUE/FALSE  -->
  <h2 *ngIf="true">Ayub</h2>
<!-- INLINE -->
  <h2 *ngIf="displayName; else elseBlock">Ayub</h2>
<ng-template #elseBlock>
  <h2>Name is hidden!!!</h2>
</ng-template>

<!-- NOT INLINE  -->
<div *ngIf="displayName;then thenBlock; else elseBlock"></div>

<ng-template #thenBlock>
<h2>Ayub</h2>
</ng-template>

<ng-template #elseBlock>
<h2>Hidden</h2>
</ng-template>
  `,
  styles: []
})
export class StructuralDirectivesComponent implements OnInit {

  public displayName = true;
  constructor() { }

  ngOnInit(): void {
  }

}
