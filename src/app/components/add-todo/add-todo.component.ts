import { Todo } from 'src/app/models/todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todo: Todo;
  initialTodo: Todo = { title: '', description: '' };
  @Output() addTodo: EventEmitter<any> = new EventEmitter<number>();
  constructor() {
    this.todo = { ...this.initialTodo };
  }

  ngOnInit() {
  }

  handleSubmit = () => {
    if (this.todo.title && this.todo.description) {
      this.addTodo.emit(this.todo);
      this.todo = { ...this.initialTodo };
    }
  }




}
