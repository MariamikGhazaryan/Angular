import {TodoListModel} from './todo-list.model';

export interface UserModel {
  id: number;
  name: string;
  todoList: TodoListModel[];
}
