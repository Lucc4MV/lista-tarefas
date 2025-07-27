import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { TodoFormComponent } from '../todo-form/todo-form/todo-form.component';

@Component({
  selector: 'app-header-components',
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule, MatDialogModule],
  templateUrl: './header-components.component.html'
})
export class HeaderComponentsComponent {

  private dialogService = inject(MatDialog)

  public handleOpenModal(): void{
   this.dialogService.open(TodoFormComponent, {
    width: '70vw',
    maxHeight: '85vh'
   })
  }
}
