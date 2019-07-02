import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/api/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<string>;
  user: string;
  constructor(private userServices: UserService) { 
    this.users = userServices.getUserList();
    this.user = '';
  }

  ngOnInit() {
  }

  addUser() {
    // this.usersApiServices.getUserList().subscribe((data: any) => {
    //   this.users = data.users;
    // });
    this.userServices.addUser(this.user);
    this.user = '';
  }
}
