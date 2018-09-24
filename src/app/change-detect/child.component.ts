import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-change-detect-child',
    templateUrl: `
    <h1>{{config.position}}</h1>
    {{runChangeDetection}}`
})

export class ChildComponent implements OnInit {
    
}