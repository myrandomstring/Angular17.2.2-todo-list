import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListService } from '../todo-list.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-editor',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './todo-editor.component.html',
  styleUrl: './todo-editor.component.css'
})

export class TodoEditorComponent implements OnInit{
  id! : number;
  currentSummary! : string ;
  currentTitle! : string;

  constructor(private route: ActivatedRoute, private todoListService : TodoListService) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    this.id = Number(this.route.snapshot.paramMap.get('index'));
    this.currentSummary = this.todoListService.getSummary(this.id);
    this.currentTitle = this.todoListService.getTitle(this.id);
  }

  setSummary(event: Event) : void {
    this.todoListService.setSummary(this.id,this.currentSummary);
  }
}
