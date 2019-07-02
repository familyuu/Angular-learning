import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from '../../shared/services/api/users.service';
@Component({
    selector: 'app-databind',
    templateUrl: './databind.component.html',
    styleUrls: ['./databind.component.css'],
    providers: [UserService]

  })

  export class DatabindComponent implements OnInit, OnDestroy{
      valueToShow: string;
      valueToTemplate: string;
      valueTwoBind: string;
      users: Array<string>;

      constructor(userService: UserService) {
        this.users = userService.getUserList();
      }
      ngOnInit() {
        this.valueToShow = '{{valueToShow}}';
        this.valueToTemplate = '[innerHtml]="valueToTemplate"';
        this.valueTwoBind = '[(ngModel)]="twobind"';
      }
      ngOnDestroy() {}

      eventHandler() {
          alert('event is trigger!');
      }
  }
