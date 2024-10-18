import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, ITask } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'https://dummyjson.com/todos'
  constructor(private http : HttpClient) {}


  getAllTasks(): Observable<ApiResponse> {
   return this.http.get<ApiResponse>(this.apiUrl)
  } 
}
