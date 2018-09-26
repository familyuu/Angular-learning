import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { timer as observableTimer } from 'rxjs';

@Component({
  selector: 'app-httpclient-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit{

  @Output() trigger = new EventEmitter();
  private list: any[];
  private reloadSubscriber; 

  ngOnInit() {
    this.list = ["Income", "Outcome"];
    // this.reloadSubscriber = observableTimer(0, 5000).subscribe(() => {
    //   return this.reloadData();
    // });
  }


  reloadData = function() {
    this.trigger.emit();
  }
}
