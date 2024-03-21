import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.scss',
  providers: [TodoServiceService],
})
export class TodoformComponent {
  todoService = TodoServiceService.getInstance();

  applyForm = new FormGroup({
    todo: new FormControl(''),
  });

  submitApplication() {
    this.todoService.addTodo(this.applyForm.value.todo ?? '');
    console.log(this.todoService.getTodos());
    this.applyForm.reset();
  }
}
