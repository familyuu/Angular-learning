import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-change-detect-child',
    template: `<h3>Hello {{name.first}} {{name.second}}</h3>
                {{runChangeDetection}}
                <button (click)="onClick()">Trigger change detection</button>`,
})

export class HelloComponent {
    @Input() name;

    get runChangeDetection(): boolean{
        console.log('Checking the child view');
        return true;
    }

    /**
     * 如果父亲component也设置了OnPush策略，
     * 子component的user事件也可以触发父亲component的change detection
     */
    onClick() {
        this.name.second = "maomao";
    }
}