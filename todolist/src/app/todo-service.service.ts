import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private static instance: TodoServiceService;
  private todosSubject = new BehaviorSubject<string[]>([]);
  todos$ = this.todosSubject.asObservable();

  static getInstance(): TodoServiceService {
    if (!TodoServiceService.instance) {
      TodoServiceService.instance = new TodoServiceService();
    }
    return TodoServiceService.instance;
  }

  constructor() {
    const todos = JSON.parse(localStorage.getItem('todos') ?? '[]');
    this.todosSubject.next(todos);
  }

  addTodo(todo: string) {
    const todos = [...this.todosSubject.value, todo];
    this.todosSubject.next(todos);
    localStorage.setItem('todos', JSON.stringify(this.todosSubject.value));
  }

  getTodos(): string[] {
    return this.todosSubject.value;
  }
}
