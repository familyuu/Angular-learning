import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-detect-child',
  templateUrl: 'child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DetectChildComponent implements OnInit {
  _age: number;

  @Input() age: number;
  @Input() name: any;
  promiseData: Promise<{}>;

  get runChangeDetection(): boolean {
    console.log('Child change detecting');
    return true;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.cdr.markForCheck();
    // }, 5000);
    // setInterval(() => {
    //   this.cdr.detectChanges();
    // }, 5000);
    this.promiseData = this.getPromise();
  }

  /**
   * child component的user事件可以触发onPush Parent component的change detection
   * 引用各类型的值发生了变化而引用没发生变化会导致父组件中的关联name也发生变化。
   */
  onClick() {
    this.name.first = 'Child-Guo';
    this.name.second = 'Child-Dan';
  }

  getPromise(): Promise<{}> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('"This is promise data"');
      }, 5000);
    });
  }
}
