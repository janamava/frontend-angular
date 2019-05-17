import { Injectable } from '@angular/core';
import { Task } from './Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private url = 'https://my-json-server.typicode.com/janamava/server/tasks';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.url);
  }
}


