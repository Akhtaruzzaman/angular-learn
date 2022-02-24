import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../interface/Task';
import { Tasks } from '../mock-task';

const httpOption = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task> {
    const curl = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(curl);
  }
  updateTask(task: Task): Observable<Task> {
    const curl = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(curl, task, httpOption);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task,httpOption);
  }
}
