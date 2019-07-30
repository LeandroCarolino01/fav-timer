// Import the native Angular services.
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './services/notification.service';


@Component({
selector: 'app-root',
template:
  `
    <h1>This is a test for watermelon</h1>
  `
})
export class AppComponent implements OnInit{



  public constructor(private notificationService:NotificationService) { 
  } 

  ngOnInit(){
    this.notificationService.startTimer(3);
  }

  


  
  

}