import { Routes } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditorComponent } from './todo-editor/todo-editor.component';

  export const routes: Routes = [
    // {path: '', redirectTo: '/index', component: TodoListComponent, pathMatch: 'full'},
    {path: '', component: TodoListComponent},
    {path: 'edit/:index', component: TodoEditorComponent},
];