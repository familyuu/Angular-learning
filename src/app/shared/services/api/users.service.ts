import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServicesModule } from '../services.module';
@Injectable({
    providedIn: ServicesModule,
})
export class UserService {
    users: Array<string> = [
      'Link',
      'Family',
      'Week',
      'Hello'
    ];
    constructor(private http: HttpClient) {}
    getUserList() : Array<string> {
      return this.users;
    }
    addUser(user: string){
      this.users.push(user);
    }
}
