import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggle: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() edit: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit() {
  }

  toggleTodo = () => {
    this.toggle.emit(this.todo);
  }
  deleteTodo = () => {
    this.delete.emit(this.todo.id);
  }

  editTodo = () => this.edit.emit(this.todo);

}



