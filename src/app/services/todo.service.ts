import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { id: 1, title: 'HomeWork', description: 'Should make this app use firestore instead of memory objects', done: false },
    { id: 2, title: 'HomeWork', description: 'Should make this app use firestore instead of memory objects', done: false },
    { id: 3, title: 'HomeWork', description: 'Should make this app use firestore instead of memory objects', done: false },
    { id: 4, title: 'HomeWork', description: 'Should make this app use firestore instead of memory objects', done: false },
    { id: 5, title: 'Work', description: 'Try to focus on the given task', done: false },
    { id: 6, title: 'Work', description: 'Try to focus on the given task', done: false }
  ]
    ;
  constructor() { }

  getAll(): Todo[] {
    return this.todos;
  }

  addItem(todo: Todo) {
    this.todos.push(todo);
  }
  deleteItem(item: number): any {
    this.todos = this.todos.filter(i => i.id !== item);
  }

}
