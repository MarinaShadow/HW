import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../../models/todos.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodosService]
})
export class TodoComponent implements OnInit {

  editing: boolean = false;
  loading: boolean = false;

  @Input() todo: ITodo;
  // @Input() edit: any;
  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
  }

  onStatusChange() {
    const todoToUpdate = {
      ...this.todo,
      completed: !this.todo.completed
    };
    this.loading = true;
    this.todosService.updateTodo(todoToUpdate)
      .then(res => {
        const updatedTodo: ITodo = res.json();
        this.todo = updatedTodo;
        this.loading = false;
      })
      .catch(error => {
         this.loading = false;
      });
  }

  toEditTodo() {
    this.editing = true;
    this.loading = true;
    this.todosService.updateTodo(this.todo)
      .then(res => {
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
       });
  }

  tryToSaveTodo() {
    this.loading = true;
    this.editing = false;
    this.todosService.updateTodo(this.todo)
      .then(res => {
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        this.editing = true;
      });
  }

}
