import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoformComponent } from './todoform/todoform.component';
import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoformComponent, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todolist';
}
