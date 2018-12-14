import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiServicesModule } from './apiServices.module';
@Injectable({
    providedIn: ApiServicesModule,
})
export class UsersApiService {
    constructor(private http: HttpClient) {}
    getUserList() {
      return this.http.get('api/users');
    }
}
