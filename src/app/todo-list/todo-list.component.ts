import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoListModel} from "../models/todo-list.model";
import {UsersService} from "../services/users.service";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    @Input()
    toDoList: TodoListModel[] = null;

    constructor(private activatedRoute: ActivatedRoute,
                private usersService: UsersService) {
    }

    ngOnInit(): void {
        if (!this.toDoList) {
            const userId = Number(this.activatedRoute.snapshot.params.id);
            this.toDoList = userId ? this.usersService.getUserById(userId)?.todoList : this.usersService.getToDoLists();
        }
    }
}
