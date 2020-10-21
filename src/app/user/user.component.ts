import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from '../service/user.service';
import { NotificationService } from '../service/notification.service';



import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  

  constructor(private router: Router, private authenticationService: AuthenticationService,
              private userService: UserService, private notificationService: NotificationService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(){

  }
  

}
