import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fill } from './ngrx/actions/todo.actions';
import { TodoState } from './ngrx/reducers/todo.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  $todos: Observable<TodoState>;

  constructor(
    private store: Store<{ todo: TodoState }>,
    private todoDataService: TodoDataService
  ) { }

  public ngOnInit() {
    this.$todos = this.store.pipe(select('todo'));

    this.todoDataService.getAllTodos().subscribe((todos) => {
      this.store.dispatch(fill({ list: todos }));
    });
  }
}
