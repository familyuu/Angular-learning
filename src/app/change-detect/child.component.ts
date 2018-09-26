import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
    selector: 'app-change-detect-child',
    template: `<h4>Reference Data:{{name.first}} {{name.second}}</h4>
               <h4>Child:{{ runChangeDetection }}</h4> 
               <h4>Async pipe{{ promiseData | async}}</h4>
               <button (click)="onClick()">User event trigger change detection</button>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HelloComponent implements OnInit{
    @Input() name;
    promiseData: Promise<string> ;

    get runChangeDetection(): boolean{
        console.log('Checking the child view');
        return true;
    }

    ngOnInit(): void {
       this.promiseData = this.getPromise();
    }
    /**
     * 如果父亲component也设置了OnPush策略，
     * 子component的user事件也可以触发父亲component的change detection
     */
    onClick() {
        this.name.second = "maomao";
    }

    getPromise () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("start");
                resolve("This is promise data");
            }, 5000);
        });
    }
}