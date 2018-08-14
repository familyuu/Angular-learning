import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { timer as observableTimer } from 'rxjs';

@Component({
  selector: 'app-httpclient-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit, OnDestroy{

  @Output() trigger = new EventEmitter();
  private list: any[];
  private reloadSubscriber; 
  constructor() { }

  ngOnInit() {
    this.list = ["Income", "Outcome"];
    this.reloadSubscriber = observableTimer(0, 5000).subscribe(() => {
      return this.reloadData();
    });
  }
  ngOnDestroy() {}


  reloadData = function() {
    this.trigger.emit();
  }
}
