import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TODO } from '../model/todo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/**
 * This class provides the TodoList service with methods to read  and add new todoitem.
 */
@Injectable()
export class TodoService {

  /**
   * Creates a new Service with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private httpService: Http) {
  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {TODO[]} The Observable for the HTTP request.
   */
  getListOfItems(): Observable<TODO[]> {
    return this.httpService.get('assets/todo.json') //Using response from local json file
      .map(response => response.json().results)
      .map((items: any[]) => items.map(item => new TODO(item)))
      .catch(this.handleError);
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

