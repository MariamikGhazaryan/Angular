import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../models/user.model";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    @Input()
    user: UserModel | null = null;

    showToDoList = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    openToDoList(): void {
        this.showToDoList = !this.showToDoList;
    }

}
