import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListItem } from '../todo-list-item';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  todo : string = '';

  constructor(private todoListService : TodoListService) {}
  
  getTodos() {
    return this.todoListService.getTodos();
  }

  deletetodo(event: Event, id: number)
  {
    this.todoListService.deleteTodo(id);
  }

  addtodo(event: Event) {
    if (this.todo.length) {
      this.todoListService.addTodo({title:this.todo,summary:''});
      this.todo = '';
    }
  }
}
