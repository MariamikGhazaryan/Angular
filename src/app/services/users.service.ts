import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {TodoListModel} from "../models/todo-list.model";
import {Subject} from "rxjs";

@Injectable()
export class UsersService {

    users: UserModel[] = [
        {
            id: 1,
            firstName: 'Mary',
            lastName: 'Smith',
            email: 'marySmith@gmail.com',
            password: 'mary123',
            todoList: [
                {
                    id: 1,
                    title: 'Buy Grocery'
                },
                {
                    id: 2,
                    title: 'Bake Cake'
                }
            ]
        },
        {
            id: 2,
            firstName: 'Jennifer',
            lastName: 'Johnson',
            email: 'jenniferJohnson@gmail.com',
            password: 'jenny123',
            todoList: [
                {
                    id: 1,
                    title: 'Send Email'
                }
            ]
        },
        {
            id: 3,
            firstName: 'Robert',
            lastName: 'Williams',
            email: 'robWilliams@gmail.com',
            password: 'rob123',
            todoList: [
                {
                    id: 1,
                    title: 'Water the plants'
                },
                {
                    id: 2,
                    title: 'Feed the cat'
                }
            ]
        },
        {
            id: 4,
            firstName: 'John',
            lastName: 'Brown',
            email: 'johnBrown@gmail.com',
            password: 'john123',
            todoList: []
        },
        {
            id: 5,
            firstName: 'Ann',
            lastName: 'Lee',
            email: 'annLee@gmail.com',
            password: 'ann123',
            todoList: [
                {
                    id: 1,
                    title: 'Read a book'
                },
                {
                    id: 2,
                    title: 'Walk the dog'
                },
                {
                    id: 3,
                    title: 'Play a game'
                }
            ]
        },
        {
            id: 6,
            firstName: 'Paul',
            lastName: 'Miller',
            email: 'paulMiller@gmail.com',
            password: 'paul123',
            todoList: [
                {
                    id: 1,
                    title: 'Wash the car'
                }
            ]
        }
    ];

    private isUserLoggedIn: Subject<boolean> = new Subject<boolean>();

    constructor() {
        this.isUserLoggedIn.next(false);
    }

    getUsers(): UserModel[] {
        return this.users;
    }

    getUserById(id: number): UserModel {
        return this.users.find(item => item.id === id);
    }

    getToDoLists(): TodoListModel[] {
        const toDoList = this.users.reduce((acc, item) => {
            acc.push(...item.todoList);
            return acc;
        }, []);
        return toDoList.map((item, index) => {
            return {id: index + 1, title: item.title};
        });
    }

    addUser(user: UserModel): void {
        this.users.push(user);
    }

    logIn(): void {
        this.isUserLoggedIn.next(true);
    }

    logOut(): void {
        this.isUserLoggedIn.next(false);
    }

    isLoggedIn(): Subject<boolean> {
        return this.isUserLoggedIn;
    }

    getUserByEmailAndPassword(email: string, password: string): UserModel | undefined {
        return this.users.find(user => user.email === email && user.password === password);
    }
}
