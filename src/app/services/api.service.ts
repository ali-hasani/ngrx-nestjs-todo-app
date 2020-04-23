
import {throwError as observableThrowError,  Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(API_URL + '/todos').pipe(
      map((response: any) => {
        const todos = response;
        return todos.map((todo) => new Todo(todo));
      }),
      catchError(this.handleError));
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post(API_URL + '/todos', todo).pipe(
      map((response: any) => {
        return new Todo(response);
      }),
      catchError(this.handleError));
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return this.http
      .get(API_URL + '/todos/' + todoId).pipe(
      map((response: any) => {
        return new Todo(response);
      }),
      catchError(this.handleError));
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put(API_URL + '/todos/' + todo.id, todo).pipe(
      map((response: any) => {
        return new Todo(response);
      }),
      catchError(this.handleError));
  }

  public deleteTodoById(todoId: string): Observable<null> {
    return this.http
      .delete(API_URL + '/todos/' + todoId).pipe(
      map((response: any) => null),
      catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return observableThrowError(error);
  }
}
