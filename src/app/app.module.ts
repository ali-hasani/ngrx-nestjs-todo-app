import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoListComponent } from './compoents/todo-list/todo-list.component';
import { TodoListFooterComponent } from './compoents/todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from './compoents/todo-list-header/todo-list-header.component';
import { TodoListItemComponent } from './compoents/todo-list-item/todo-list-item.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { StoreModule } from '@ngrx/store';
import { toDoReducer } from './ngrx/reducers/todo.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ todo: toDoReducer }),
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
