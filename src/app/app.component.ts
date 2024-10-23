import { AfterViewInit, Component, effect, QueryList, viewChild, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  template: `
  <p>Valor in parent : {{valueFromParent}}</p>
  
  <app-child [(value)]="valueFromParent" />
  <app-child [(value)]="valueFromParent" />
  <app-child [(value)]="valueFromParent" />
  <app-child [(value)]="valueFromParent" />
  `,
})
export class AppComponent implements AfterViewInit {

  valueFromParent =20;

   childComponent= viewChild.required(ChildComponent);
   childrenComponent= viewChildren(ChildComponent);
  // @ViewChild(ChildComponent) childComponent!:ChildComponent;
  //  @ViewChildren(ChildComponent) childrenComponent!:QueryList<ChildComponent>;

  constructor(){
    effect(()=>
      // console.log("Hello from Child", this.childComponent().value())
       console.log("Hello from Children", this.childrenComponent())
    );
  }
  
  
  ngAfterViewInit(): void {
    // this.childrenComponent.forEach((child) => console.log(child.value()));
    // console.log('this.childComponent', this.childComponent.value());
  }
}
