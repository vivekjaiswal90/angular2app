import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
        <h1>Root Component</h1>
        <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
         <p>{{test}}</p></app-lifecycle>
        <button (click)="delete =true ">Click to Delete</button>
        <button (click)="test = 'Changed Value'">Click to Change Content </button>
        <button (click)="boundValue = 2000">Click to Change Binding</button>
           `,
})
export class AppComponent {
  delete = false;
  test = 'Starting Value';
  boundValue = 1000;
}
