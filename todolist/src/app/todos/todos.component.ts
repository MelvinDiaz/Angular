import { Component } from '@angular/core';
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
  todos$ = this.todoService.todos$;
  constructor(private todoService: TodoServiceService) {}
}
