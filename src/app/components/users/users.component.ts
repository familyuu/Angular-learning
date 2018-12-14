import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../shared/services/api/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: Array<any>;

  constructor(private usersApiServices: UsersApiService) { }

  ngOnInit() {
  }

  getUsers() {
    this.usersApiServices.getUserList().subscribe((data: any) => {
      this.users = data.users;
    });
  }
}
