import { Injectable } from '@angular/core';
import { TodoListItem } from './todo-list-item';

// service provided in root so acts as a singleton accesible from anywhere in app
@Injectable({
  providedIn: 'root'
})

export class TodoListService {
  private todos : TodoListItem[] = [];

  addTodo(todo : TodoListItem) {
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }
  
  deleteTodo(id : number) {
    this.todos.splice(id,1);
  }
  
  getSummary(id : number) {
    return this.todos[id].summary;
  }
  
  getTitle(id : number) {
    return this.todos[id].title;
  }
  
  setSummary(id : number,summary : string) {
    this.todos[id].summary = summary;
  }

  constructor() { }
}
