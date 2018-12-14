import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnDestroy,
  Component,
  OnInit,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-parent',
  templateUrl: './parent.component.html'
})
export class LifecycleParentComponent
  implements OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {

  childName = {
    name: 'fromParent->'
  };

  constructor() {
    console.log('Parent constructor');
  }

  ngOnChanges() {
    console.log('Parent og on changes');
  }
  ngOnInit() {
    console.log('parent ngOnInit');
  }

  ngDoCheck() {
    console.log('Parent ng do check');
  }

  ngAfterContentInit() {
    console.log('Parent ng after content init');
  }

  ngAfterContentChecked() {
    console.log('Parent ng after content checked');
  }

  ngAfterViewInit() {
    console.log('Parent after view init');
  }
  ngAfterViewChecked () {
    console.log('Parent after view checked');
  }
  ngOnDestroy() {
    console.log('Parent destory');
  }

  changeChildName() {
    this.childName.name += 'fromPatent-->';
  }
  changeChildNamefromContent() {
    this.childName.name += 'fromContent-->';
  }
}
