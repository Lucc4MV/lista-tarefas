import { Component } from '@angular/core';
import { HeaderComponentsComponent } from './components/header-components/header-components.component';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './components/todo-card/todo-card/todo-card.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponentsComponent, TodoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list-17';
}
