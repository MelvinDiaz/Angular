import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../Todo';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-formtodos',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formtodos.component.html',
  styleUrl: './formtodos.component.scss',
})
export class FormtodosComponent {
  newTodo: string = '';
  todos: Todo[] = [];
  todoService: TodoServiceService;

  constructor(todoService: TodoServiceService) {
    this.todoService = todoService;
  }

  addTodo() {
    if (this.newTodo) {
      this.todoService.saveTodo(this.newTodo);
    }
    this.newTodo = '';
  }
}
