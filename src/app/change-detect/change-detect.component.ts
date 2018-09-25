import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { HelloComponent } from './child.component';
@Component({
  selector: 'app-change-detect',
  templateUrl: './change-detect.component.html',
  styleUrls: ['./change-detect.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectComponent implements OnInit {
  name = {
    first: "guo",
    second: "dan"
  };

  get runChangeDetection(): boolean {
    console.log('Checking the parent view');
    return true;
  }
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    /**
     * 这个定时器函数，可以证明，
     * 当change detection strategy变成OnPush时，
     * 只有Input的reference改变才会触发change detection
     */
    setTimeout(() => {
      /**
       * Only with run change detection explicitly, 
       * view will update when you just change the name value.
       */
      this.name.second = "mao";
      // this.cdr.detectChanges();
      this.cdr.markForCheck();


      // this.name = {
      //   first: "guo",
      //   second: "mao"
      // };
    }, 5000);
  }

  /**
   * 这个User click事件可以证明，
   * 当component和它的子component发生了user事件时，
   * 同样也可以触发change detection
   */
  onClick() {
    this.name.second = "xuan";
  }


}
