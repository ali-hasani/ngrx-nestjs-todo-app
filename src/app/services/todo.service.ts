import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {

  }

  getTodos(): Observable<any[]> {
    return this.http.get(`http://localhost:3000/todos`) as Observable<any[]>;
  }
}
