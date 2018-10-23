import { element } from 'protractor';
import { Todo } from 'src/app/models/todo';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Input() todo;
  @Output() addTodo: EventEmitter<any> = new EventEmitter<number>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() editTodo: EventEmitter<any> = new EventEmitter<any>();
  editMode = false;
  constructor() {
  }

  ngOnInit() {
    if (!this.todo) {
      this.todo = {};
    } else {
      this.editMode = true;
    }
  }

  handleSubmit = () => {
    if (this.todo.title && this.todo.description) {
      this.addTodo.emit(this.todo);
      this.todo = {};
    }
    this.editMode = false;
  }

  cancelEdit() {
    this.todo = {};
    this.editMode = false;
    this.cancel.emit();
  }

  updateTodo() {
    this.editTodo.emit(this.todo);
    this.cancel.emit();
    this.editMode = false;
  }
}
