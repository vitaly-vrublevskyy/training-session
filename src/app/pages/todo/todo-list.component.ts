import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../providers/todo.service';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-list-component',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss']
})


export class TodoListComponent implements OnInit {

  newTodoText: string;

  constructor(public store: TodoService) {}

  ngOnInit(): void {
    this.store.getListOfLocalItems()
      .subscribe(items => console.log(items));
  }

  stopEditing(todo: Todo, editedTitle: string) {
    todo.title = editedTitle;
    todo.editing = false;
  }


  updateEditingTodo(todo: Todo, editedTitle: string) {
    todo.editing = false;
    if (editedTitle.trim().length === 0) {
      this.store.remove(todo);
    } else {
      this.store.update(todo, editedTitle);
    }
  }

  // TODO: Ad ngRx for 3 state
}



