import { Component, OnInit } from '@angular/core';
import { TodoService } from './providers/todo.service';
import { TODO } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /* Collection of todo items */
  collection:  TODO[];

  constructor(private service: TodoService) {
  }

  ngOnInit(): void {
    this.service.getListOfItems()
      .subscribe((item: TODO[]) => this.collection = item);
  }
}
