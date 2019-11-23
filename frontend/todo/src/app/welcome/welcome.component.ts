import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = "";
  welcomeMessageFromService:string;
  constructor(private route: ActivatedRoute,private serviceWelcomeDataService:WelcomeDataService) { }
 
  ngOnInit() {
    
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    //console.log(this.serviceWelcomeDataService.executeHelloWorldBeanService());
    this.serviceWelcomeDataService.executeHelloWorldBeanService().subscribe(
      response =>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )    
  }
  handleErrorResponse(error: any): void {
   this.welcomeMessageFromService = error;
  }


  handleSuccessfulResponse(response){
    console.log(this.welcomeMessageFromService=response.message);
    }
//==================================//
getWelcomeMessageWithParamater() {
  //console.log(this.serviceWelcomeDataService.executeHelloWorldBeanService());
  console.log(this.name);
  this.serviceWelcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    response =>this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
  )    
}

}
