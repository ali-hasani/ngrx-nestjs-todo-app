import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoState } from 'src/app/ngrx/reducers/todo.reducer';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
  }
)
export class TodoListComponent implements OnInit {
  $todos: Observable<TodoState>;

  constructor(private store: Store<{ todo: TodoState }>) {}

  ngOnInit() {
    this.$todos = this.store.pipe(select('todo'));
  }
}
