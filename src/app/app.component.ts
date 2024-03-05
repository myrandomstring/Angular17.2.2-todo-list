import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoListComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
