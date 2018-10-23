import { Observable } from 'rxjs';
import { Component, OnInit, } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoToEdit: Todo;
  showForm: boolean;
  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.getAll();
  }

  onDelete = (id: string) => {
    this.todoService.deleteItem(id);
  }
  onToggle = (todo: Todo) => {
    todo.done = !todo.done;
    this.todoService.updateItem(todo);
  }

  onRunEdit = (item: Todo) => {
    this.todoToEdit = item;
    this.showForm = true;
  }

  onEdit = (item: Todo) => {
    this.todoService.updateItem(item);
    this.todoToEdit = null;
  }

  onAddTodo = (item: Todo) => {
    this.todoService.addItem(item);
    this.hideForm();

  }

  onCancel = () => {
    this.hideForm();
    this.todoToEdit = null;
    this.todos = this.todoService.getAll();
  }

  hideForm = () => {
    this.showForm = false;
  }

  displayForm = () => {
    this.showForm = true;
  }
}
