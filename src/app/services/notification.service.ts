import { Injectable } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  timerInterval: any;
  changeTitle: boolean = true;

  public constructor(private titleService: Title) {} 

  public startTimer(notificationCount: Number) {

    clearInterval(this.timerInterval);


    this.timerInterval = setInterval(() => {
      if (this.changeTitle) {
        this.changeTabTitle(`(${notificationCount}) Watermelon Dashboard`);
        this.changeTitle = false;
      } else {
        if (notificationCount == 1) {
          this.changeTabTitle(`You have ${notificationCount} new message.`)
        } else {
          this.changeTabTitle(`You have ${notificationCount} new messages.`)
        }
        this.changeTitle = true;
      }
    }, 1000)

  }

  public stopTimer() {
    clearInterval(this.timerInterval)
  }

  public changeTabTitle(title:string){
    this.titleService.setTitle(title);
  }

}
