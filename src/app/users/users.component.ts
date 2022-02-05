import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {UserModel} from '../models/user.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: UserModel[] = [];
    showToDoList = false;
    searchedString: string = '';

    constructor(private userService: UsersService) {
    }

    ngOnInit(): void {
        this.users = this.userService.getUsers();
    }

    searchUser(event: any) {
        this.searchedString = event.target.value;
        this.users = new Array(...this.users);
    }
}
