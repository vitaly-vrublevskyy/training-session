import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';


/**
 * This class provides the TodoList service with methods to read  and add new todoitem.
 */
@Injectable()
export class TodoService {
  get todos(): Todo[] {
    return this._todos;
  }

  set todos(value: Todo[]) {
    this._todos = value;
    this.saveLocally();
  }

  private _todos: Todo[];

  /**
   * Creates a new Service with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private httpService: Http) {
  }

  getListOfLocalItems(): Observable<Todo[]> {
    const raw: string = localStorage.getItem('todo-list') || '[]';
    const items: any[] = JSON.parse(raw);
    this._todos = items.map(item => new Todo(item));
    return Observable.of(this._todos);
  }


  isAllCompleted(): boolean {
    return this.todos.every(item => item.completed);
  }

  setAll(completed: boolean) {
    this.todos.forEach(item => item.completed = completed);
    this.saveLocally();
  }

  removeCompleted() {
    this.todos = this.todos.filter(item => !item.completed);
  }

  get remainingCount(): number {
    return this.todos.filter(item => !item.completed).length;
  }

  get completedCount(): number {
    return this.todos.filter(item => item.completed).length;
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
    this.saveLocally();
  }

  remove(todo: Todo) {
    this.todos = this.todos.filter(item => item !== todo);
  }

  add(title: string) {
    const item: Todo = new Todo();
    item.title = title;
    this.todos.push(item);
    this.saveLocally();
  }

  update(item: Todo, title: string) {
    item.title = title;
    this.saveLocally();
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {TODO[]} The Observable for the HTTP request.
   */
  getListOfItems(): Observable<Todo[]> {
    return this.httpService.get('assets/todo.json')
      .map(response => response.json().results)
      .map((items: any[]) => items.map(item => new Todo(item)))
      .catch(this.handleError);
  }

  private saveLocally() {
    const raw: any[] = this.todos.map(item => item.serialize());
    localStorage.setItem('todo-list', JSON.stringify(raw));
  }

  /**
   * Handle HTTP error
   */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg: any = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

