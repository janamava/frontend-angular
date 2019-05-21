import { Injectable } from '@angular/core';
import { Task } from './Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private url = 'http://localhost:3000/tasks';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.url);
  }

}

