import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TODO } from '../model/todo';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private httpService: Http) {
  }

  /**
  * Running a method which returns Observeble (in Java word it names like Stream) of strong typed Model wraped as
   *
   * @return list of TODO items
  * */
  getListOfItems(): Observable<TODO[]> {
    return this.httpService.get('assets/todo.json') // TODO: API
      .map(response => response.json().results)
      .map((items: any[]) => items.map(item => new TODO(item)));
  }

  /*
  * Main idea of this method to handle http POST and provide serialized internal object from UI
  * On result of HTTP response we will have entity with valid/real id
  * */
  addItem(item: TODO): Observable<TODO> {
    return this.httpService.post('/api/add', item.serialize()) // TODO: API
      .map(response => response.json())
      .map((items: any) => new TODO(item));
  }
}

