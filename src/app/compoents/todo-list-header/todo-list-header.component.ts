import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { Store } from '@ngrx/store';
import { create } from 'src/app/ngrx/actions/todo.actions';
import * as _ from 'lodash';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { TodoState } from 'src/app/ngrx/reducers/todo.reducer';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent {

  newTodo: Todo = new Todo();

  constructor(
    private store: Store<{ todo: TodoState }>,
    private todoDataService: TodoDataService
  ) { }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo).subscribe((newTodo) => {
      this.store.dispatch(create({ task: _.cloneDeep(newTodo) }));
      this.newTodo = new Todo();
    });
  }

}
