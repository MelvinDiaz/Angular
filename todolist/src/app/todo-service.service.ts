import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todos: Todo[] = [];

  saveTodo(newTodo: string) {
    this.todos.push(new Todo(newTodo, false));
  }

  getTodos() {
    return this.todos;
  }
}
