import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationType } from '../enum/notification-type.enum';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public showLoading: boolean;
  private subscriptions: Subscription[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  public onRegister(user: User): void {
    
  }

  private sendNotification(notificationType: NotificationType, message: string): void {
    
  }

}
