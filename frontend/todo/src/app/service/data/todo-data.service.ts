import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, API_JPA_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService { 

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username:string){
    return this.http.get<Todo[]>(`${API_JPA_URL}/users/${username}/todos`)
  }


  deleteTodoService(username,id){
    return this.http.delete(`${API_JPA_URL}/users/${username}/todos/${id}`)
  }

  retriveTodo(username, id) {
    return this.http.get<Todo>(`${API_JPA_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo) {
    return this.http.put(`${API_JPA_URL}/users/${username}/todos/${id}`,todo)
  }

  createTodo(username, todo) {
    console.log(username)
    return this.http.post(`${API_JPA_URL}/users/${username}/todos`,todo)
  }


}
