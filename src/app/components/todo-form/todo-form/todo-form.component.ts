import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TodoSignalsService } from '../../../services/todo-signals.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HeaderComponentsComponent } from '../../header-components/header-components.component';


@Component({
  selector: 'app-todo-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule],
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent {
  private todosSignalService = inject(TodoSignalsService);
  public allTodos = computed(() => this.todosSignalService.todosState());
  public dialogRefService = inject(MatDialogRef<HeaderComponentsComponent>)

  public todoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  public handleCreateNewTodo(): void{
    if(this.todoForm.value && this.todoForm.valid){
      const title = String(this.todoForm.controls['title'].value);
      const description = String(this.todoForm.controls['description'].value);

      const todos = this.todosSignalService.todosState(); // pega o valor atualizado do signal
      const maxId = Math.max(...todos.map(todo => todo.id), 0);
      const id = maxId + 1;
      const done = false;

      this.todosSignalService.addTodo({id, title, description, done})
      this.dialogRefService.close();
    }
  }
  public handleCloseModal(): void{
  this.dialogRefService.close();
  }
}
