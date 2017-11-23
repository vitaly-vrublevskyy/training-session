import { Component, OnInit } from '@angular/core';
import { TodoService } from './providers/todo.service';
import { TODO } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * This class represents the lazy loaded AppComponent.
 */
export class AppComponent implements OnInit {

  /* Collection of todo items */
  collection:  TODO[];

  /* Double binded field in model*/
  name: string;

  /**
   * Creates an instance of the AppComponent with the injected
   * TodoList Service.
   *
   * @param {TodoService} service - The injected TodoService.
   */
  constructor(private service: TodoService) {
  }

  /**
   * Get the whole items OnInit
   */
  ngOnInit(): void {
    this.getTodoItems();
  }

  /**
   * Handle the nameListService observable
   */
  getTodoItems() {
    this.service.getListOfItems()
      .subscribe((item: TODO[]) => this.collection = item);
  }


  /**
   * Pushes a new name onto the collection array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addItem() {
    const item: TODO = new TODO();
    item.description = this.name;
    this.collection.push(item);
    return false;
  }

  /*
  * Real World API request
  * Send entity via /api and add just created item into list with real id
  * */
  addItem_live() {
    const item: TODO = new TODO();
    item.description = this.name;
  }

  deleteItem(target: TODO) {
    this.collection = this.collection.filter(item => item !== target);
  }
}



