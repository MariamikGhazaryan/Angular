import {TodoListModel} from './todo-list.model';

export interface UserModel {
  id: number;
  firstName: string;
  lastName:string;
  email:string;
  password: string;
  todoList: TodoListModel[];
}
