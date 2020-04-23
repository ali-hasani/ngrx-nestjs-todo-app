import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TodoState } from 'src/app/ngrx/reducers/todo.reducer';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.scss']
})
export class TodoListFooterComponent implements OnInit {
  $todos: Observable<TodoState>;

  constructor(private store: Store<{ todo: TodoState }>) { }

  ngOnInit() {
    this.$todos = this.store.pipe(select('todo'));
  }
}
