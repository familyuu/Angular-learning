import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-databind',
    templateUrl: './databind.component.html',
    styleUrls: ['./databind.component.css']
  })

  export class DatabindComponent implements OnInit, OnDestroy{
      valueToShow: string;
      valueToTemplate: string;
      valueTwoBind: string;

      constructor() {}
      ngOnInit() {
        this.valueToShow = 'XXXXXXXXXXXXXXXXXX';
        this.valueToTemplate = 'hello';
        this.valueTwoBind = 'twobind';
      }
      ngOnDestroy() {}

      eventHandler() {
          alert('event is trigger!');
      }
  }
