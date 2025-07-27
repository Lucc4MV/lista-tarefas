import { TodoSignalsService } from './../../../services/todo-signals.service';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { todoKeyLocalStorage } from '../../../models/enum/todoKeyLocalStorage';
import { Todo } from '../../../models/model/todo.model';


@Component({
  selector: 'app-todo-card',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTabsModule],
  templateUrl: './todo-card.component.html',
})
export class TodoCardComponent implements OnInit{
  private todoSignalsService = inject(TodoSignalsService)
  private todoSignal = this.todoSignalsService.todosState
  public todoList = computed(() => this.todoSignal());

  public ngOnInit(): void {
    this.getTodosInLocalStorage();
  }
  private getTodosInLocalStorage(): void {
    const todosDatas = localStorage.getItem(todoKeyLocalStorage.TODO_LIST) as string;
    todosDatas && this.todoSignal.set(JSON.parse(todosDatas));
  }

  private saveTodosInLocalStorage(): void{
    this.todoSignalsService.saveTodosInLocalStorage();
  }

  public handleDoneTodo(todoId: number): void{
    this.todoSignal.update((todos) =>
     todos.map((todo) => todo?.id === todoId ? {...todo, done: !todo.done}: todo)
    )
    this.saveTodosInLocalStorage(); // <- salva a atualização
  }

  public handleDeleteTodo(todo: Todo): void{
    if(todo) {
      this.todoSignal.update((todos) => {
        const update = todos.filter((t) => t !== todo);
        this.saveTodosInLocalStorage();
        return update
      })
    }
  }
}
