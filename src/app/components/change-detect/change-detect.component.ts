import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detect',
  templateUrl: './change-detect.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectComponent implements OnInit {
  name = {
    first: 'Guo',
    second: 'Dan'
  };
  age = '27';

  get runChangeDetection(): boolean {
    console.log('Parent change detecting');
    return true;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {

    // setInterval(() => {
    //   // this.name.second += 'luka';
    //   // this.age += '28';

    //   // this.cdr.detach();
    //   // this.cdr.detectChanges();
    //   // this.cdr.markForCheck();

    //   // this.name = {
    //   //   first: 'guo',
    //   //   second: 'xuan'
    //   // };
    // }, 5000);
  }

  /**
   * 用户交互是异步事件，可以触发非onPush策略的组件脏检查
   */
  onClick() {
    this.name.first += 'Luka';
    this.name.second += 'luka';
  }

}
