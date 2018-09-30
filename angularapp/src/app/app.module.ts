import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoEditorComponent } from './components/todo-editor/todo-editor.component';
import { HomeComponent } from './home/home.component';
// import { FilterForTodosPipe } from './pipes/filter-for-todos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TodosComponent,
    TodoComponent,
    TodoEditorComponent,
    HomeComponent,
    // FilterForTodosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
