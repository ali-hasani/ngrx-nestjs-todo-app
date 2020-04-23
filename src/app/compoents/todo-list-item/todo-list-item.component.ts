import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { Store } from '@ngrx/store';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { toggle, remove } from 'src/app/ngrx/actions/todo.actions';
import * as _ from "lodash";
import { TodoState } from 'src/app/ngrx/reducers/todo.reducer';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  constructor(
    private store: Store<{ todo: TodoState }>,
    private todoDataService: TodoDataService) {
  }

  toggleTodoComplete(todo: Todo) {
    this.todoDataService
      .toggleTodoComplete(_.cloneDeep(todo))
      .subscribe(
        (updatedTodo) => {
          this.store.dispatch(toggle({ task: _.cloneDeep(updatedTodo) }));
        }
      );
  }

  removeTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id).subscribe(result => { 
      this.store.dispatch(remove({ id: todo.id }));
    })
  }

}
