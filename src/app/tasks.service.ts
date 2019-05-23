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

  private url = 'http://localhost:3020/tasks';

  constructor(private httpClient: HttpClient) { }


  getTasks(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.url);
  }

  postTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.url, task, httpOptions);
  }

  putTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(this.url, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const id = task.id;
    const url = `${this.url}/${id}`;
    return this.httpClient.delete<Task>(url, httpOptions);
  }
}
