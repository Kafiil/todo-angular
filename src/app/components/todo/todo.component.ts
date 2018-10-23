import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.delete.subscribe(() => console.log(` item ${this.todo.id} was deleted`));
  }

  ngOnInit() {

  }

  toggleTodo = () => {
    this.todo.done = !this.todo.done;
  }
  deleteTodo = () => {
    this.delete.emit(this.todo.id);
  }

}



