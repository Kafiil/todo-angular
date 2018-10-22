import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [{ title: 'HomeWork', description: 'Should make this app use firestore instead of memory objects', done: false }];
  constructor() { }

  getAll(): Todo[] {
    return this.todos;
  }

  addItem(todo: Todo) {
    this.todos.push(todo);
  }

}
