import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{

  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){
  }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  deleteMessage :string;
  // todos=[
  //   new Todo(1,'learn to dance',false,new Date()),
  //   new Todo(2,'to become expert in angular',false,new Date()),
  //   new Todo(1,'visit canada',false,new Date())
  // ];
  // todo={
  //   id: 1,
  //   description : 'learn to dance'
  // }
  todos :Todo[]

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
   this.refreshTodos();// to retreive the total list from backend
  }

    refreshTodos(){
      this.todoService.retrieveAllTodos('in28minutes').subscribe(
        response => {this.todos = response}
      )
    }



  deleteTodo(id:number){
    console.log(id)

    this.todoService.deleteTodoService('in28minutes',id).subscribe(
      response => {
        console.log(response)       
        this.deleteMessage =`delete of todo ${id} success`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todo',id])
  }

  addTodo(){
    this.router.navigate(['todo',-1]);
  }
 
}
