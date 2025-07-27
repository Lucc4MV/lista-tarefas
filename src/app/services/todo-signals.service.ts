import { Injectable, signal } from '@angular/core';
import { todoKeyLocalStorage } from '../models/enum/todoKeyLocalStorage';
import { Todo } from '../models/model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoSignalsService {
  public todosState = signal<Array<Todo>>([]);

  public addTodo({ id, title, description, done }: Todo): void {
    if (id !== undefined && id !== null && title?.trim() && description?.trim()) {
      this.todosState.update((todos: Todo[]) => [
        ...todos,
        { id, title, description, done }
      ]);
      this.saveTodosInLocalStorage();
    }
  }

  public saveTodosInLocalStorage(): void {
    const todos = JSON.stringify(this.todosState());
    if (todos) {
      localStorage.setItem(todoKeyLocalStorage.TODO_LIST, todos);
    }
  }
}
