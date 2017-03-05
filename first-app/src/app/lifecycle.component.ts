import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: ` 
            <ng-content></ng-content>
             <hr>
             <p>{{bindable}}</p>
`,
  styles: []
})
export class LifecycleComponent implements OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, OnInit {
  constructor() {}

  @Input() bindable = 1000;

  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck() {
    this.log('ngOnCheck');
  }
  ngAfterContentInit() {
    this.log('ngOnAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngOnAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngOnAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngOnAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
