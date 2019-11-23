import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  
  constructor(private basicAuthenticationService:BasicAuthenticationService) { }
  // HttpIntercepter acts like a filter
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let username = 'in28minutes'
    // let password = 'dummy'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
   
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAuthHeaderString && username){
     
    //since request cant be manipulated, we are making its clone and to that clone the headers are set up
      request = request.clone(
        {
          setHeaders: {
            Authorization: basicAuthHeaderString
          }
        }
      )
    }
    return next.handle(request)    
  }
 
}
