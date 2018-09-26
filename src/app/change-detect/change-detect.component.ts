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
  age = "27";

  get runChangeDetection(): boolean {
    console.log('Checking the parent view');
    return true;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {

    setTimeout(() => {
      /**
       * 这个定时器函数，可以证明，
       * 当change detection strategy变成OnPush时，
       * 只有Input的reference改变才会触发change detection
       */
      // this.name.second = "mao";

      /**
       * Only with run change detection explicitly, 
       * view will update when you just change the name value.
       */
      // this.cdr.detectChanges();
      // this.cdr.markForCheck();

      this.name = {
        first: "guo",
        second: "mao"
      };
      this.age = "28";
    }, 5000);
  }


  onClick() {
    /**
     * 这个User click事件可以证明，
     * 当component和它的子component发生了user事件时，
     * 同样也可以触发change detection
     */
    this.name.first = "Luka";
    this.name.second = "dan";
  }


}
