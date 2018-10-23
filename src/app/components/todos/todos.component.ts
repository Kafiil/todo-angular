import { Component, OnInit, } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  showForm: boolean;
  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getAll();
  }

  onDelete = (item: number) => {
    this.todoService.deleteItem(item);
    this.todos = this.todoService.getAll();
  }

  onAddTodo = (item: Todo) => {
    this.todoService.addItem(item);
    this.todos = this.todoService.getAll();
    this.hideForm();

  }

  hideForm = () => {
    this.showForm = false;
  }

  displayForm = () => {
    this.showForm = true;
  }

  ngOnInit() {
  }

}
