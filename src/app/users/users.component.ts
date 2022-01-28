import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {UserModel} from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[] = [];
  showToDoList = false;

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
