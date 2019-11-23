import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string,password:string){
   // console.log('before '+ this.isLoggedIn())
    if(username === "in28minutes" && password==="dummy")
    {
       sessionStorage.setItem('authenticatedUser',username)
       //console.log('after  '+ this.isLoggedIn())
       return true;
    }
    return false;
  }
  isLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }

  isLoggedOut(){
     let len=sessionStorage.length;
     if(len==0){
       return true
     }
     return false;
  }


}
