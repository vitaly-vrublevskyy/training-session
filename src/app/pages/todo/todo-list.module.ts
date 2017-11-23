import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import { TodoListRoutingModule } from './todo-list.routing.module';
import { TodoService } from '../../providers/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoListRoutingModule
  ],
  exports: [],
  declarations: [TodoListComponent],
  providers: [TodoService],
})
export class TodoListModule {
}
