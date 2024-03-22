import { Component } from '@angular/core';
import { Todo } from '../Todo';
import { TodoServiceService } from '../todo-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  todos: Todo[] = [];

  todoService: TodoServiceService;

  constructor(todoService: TodoServiceService) {
    this.todoService = todoService;
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
