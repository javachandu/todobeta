import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnInit {

  errorMessage="Error Occured, Contact Support ***-***";

  constructor() { }

  ngOnInit() {
  }

}
