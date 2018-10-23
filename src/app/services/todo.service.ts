import { Todo } from './../models/todo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Observable<Todo[]>;
  itemCollection: AngularFirestoreCollection<Todo>;
  items: Observable<Todo[]>;

  constructor(private afs: AngularFirestore) {
    this.itemCollection = afs.collection<Todo>('items');
  }

  getAll(): Observable<Todo[]> {
    this.items = this.itemCollection.snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data } as Todo;
        }))
      );

    return this.items;
  }

  addItem(todo: Todo) {
    this.itemCollection.add(todo)
      .catch(err => console.log('Error in adding item ' + todo.id, err));
  }

  deleteItem(id: string): any {
    this.itemCollection.doc(`${id}`).delete()
      .catch(err => console.log('Error in deleting item ' + id, err));
  }

  updateItem(item: Todo): any {
    this.itemCollection.doc(item.id).update(item)
      .catch(err => console.log('Error in updatin item ' + item.id, err));
  }
}
