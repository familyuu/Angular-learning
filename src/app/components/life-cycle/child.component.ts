import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnDestroy,
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleChildComponent
  implements OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {

  @Input() childName: any;

  constructor() {
    console.log('Child constructor');
  }
  ngOnChanges() {
    console.log('child ngOnChanges, Input property change');
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngDoCheck() {
    console.log('child check');
  }
  ngAfterContentInit() {
    console.log('child ng content init');
  }
  ngAfterContentChecked() {
    console.log('child ng content checked');
  }
  ngAfterViewInit() {
    console.log('child ng after viwe init');
  }

  ngAfterViewChecked() {
    console.log('child ng after view checked');
  }

  ngOnDestroy() {
    console.log('child ng destory');
  }
}
