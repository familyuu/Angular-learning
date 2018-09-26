import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-change-detect-child',
    template: `<h5>Reference Data:{{name.first}} {{name.second}}</h5>
               <h5>Not reference data: {{age}}</h5>
               <h5>Child getter:{{ runChangeDetection }}</h5>
               <h5>Async pipe Promise {{ promiseData | async }}</h5>
               <button (click)="onClick()">User event trigger change detection</button>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HelloComponent implements OnInit {
    _age;

    @Input() name;
    @Input() set age(value) {
        this._age = value;
        this.cdr.markForCheck();
    }

    promiseData: Promise<{}>;

    get runChangeDetection(): boolean {
        console.log('Checking the child view');
        return true;
    }

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.promiseData = this.getPromise();
    }

    onClick() {
    /**
     * 如果父亲component也设置了OnPush策略，
     * 子component的user事件也可以触发父亲component的change detection
     */
        this.name.first = "Mao";
        this.name.second = "mao";
    }

    getPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("start");
                resolve("This is promise data");
            }, 5000);
        });
    }
}