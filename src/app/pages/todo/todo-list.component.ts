import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../providers/todo.service';

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
      .subscribe((items => console.log(items));
  }
  // TODO: Ad ngRx for 3 state
}



