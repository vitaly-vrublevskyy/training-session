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

  /* Double binded field in model*/
  name: string;

  constructor(private service: TodoService) {
  }

  ngOnInit(): void {
    this.service.getListOfItems()
      .subscribe((item: TODO[]) => this.collection = item);
  }


  // V1 (simple collection manipulation)
  addItem() {
    const item: TODO = new TODO();
    item.description = this.name;
    this.collection.push(item);
  }

  /*
  * Real World API request
  * */
  addItem_live() {
    const item: TODO = new TODO();
    item.description = this.name;
    this.service.addItem(item)
      .subscribe(entity => this.collection.push(entity));
  }

  deleteItem(target: TODO) {
    this.collection = this.collection.filter(item => item !== target);
  }
}



