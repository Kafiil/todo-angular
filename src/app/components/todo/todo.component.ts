import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {
  }

  ngOnInit() {

  }

  toggleTodo = () => {
    this.todo.done = !this.todo.done;
    console.log(event);
  }
  deleteTodo = () => { };

}



