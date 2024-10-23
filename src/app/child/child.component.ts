import { Component, model } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
  <div>
    <h2> Child Component</h2>

    Current value : {{ value() }}
    <button (click)="increment()" >Incrementar</button>
  </div>
  `,
})
export class ChildComponent {

  value = model(0);

  increment(){
    this.value.update((value) => value+1);
  }

}
