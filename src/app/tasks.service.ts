import { Injectable } from '@angular/core';
import { Task } from './Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private url = 'http://localhost:3000/tasks';

  constructor(private httpClient: HttpClient) { }


  getTasks(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.url);
  }

  postTask(task: Task): Observable<Task> {
    this.httpClient.post<Task>(this.url, task, httpOptions).subscribe
  }
}
