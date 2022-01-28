import {Injectable} from '@angular/core';
import {UserModel} from './user.model';
import {TodoListModel} from "./todo-list.model";

@Injectable()
export class UsersService {

  users: UserModel[] = [
    {
      id: 1,
      name: 'Mary',
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
      name: 'Jennifer',
      todoList: [
        {
          id: 1,
          title: 'Send Email'
        }
      ]
    },
    {
      id: 3,
      name: 'Robert',
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
      name: 'John',
      todoList: []
    },
    {
      id: 5,
      name: 'Ann',
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
      name: 'Paul',
      todoList: [
        {
          id: 1,
          title: 'Wash the car'
        }
      ]
    }
  ];

  constructor() {
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
}
