import {Component, Input, OnInit} from '@angular/core';
import {TodosService} from '../../services/todos.service';
import {ITodo} from '../../models/todos.interface';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  providers: [TodosService],
  styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent implements OnInit {
  // editing: boolean = false;
  // loading: boolean = false;
  // @Input() edit: any;
  @Input() todo: ITodo;
  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
  }
  // toEditTodo() {
  //   this.editing = true;
  //   this.loading = true;
  //   this.todosService.updateTodo(this.todo)
  //     .then(res => {
  //       this.loading = false;
  //     })
  //     .catch(error => {
  //       this.loading = false;
  //     });
  // }
  // tryToSaveTodo() {
  //   this.loading = true;
  //   this.editing = false;
  //   this.todosService.updateTodo(this.todo)
  //     .then(res => {
  //       this.loading = false;
  //     })
  //     .catch(error => {
  //       this.loading = false;
  //       this.editing = true;
  //     });
  // }
}
