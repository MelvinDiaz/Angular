import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos = [
    { name: 'Buy milk' },
    { name: 'Buy bread' },
    { name: 'Buy eggs' },
    { name: 'Buy cheese' },
  ];
}
