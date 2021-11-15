import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticatorService } from 'src/app/services/authenticator.service';
import { UsersService } from 'src/app/services/users.service';

declare var $: any;

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent implements OnInit, OnDestroy {
  users?: Array<any>;
  message: string;
  gu_sub?: Subscription;

  constructor(private usersService: UsersService, private authenticatorService: AuthenticatorService) {
    this.message = "Loading data, please wait...";
  }

  ngOnInit(): void {
    this.gu_sub = this.usersService.getAllUsers().subscribe(resData => {
      this.users = resData;
      this.message = "";
    }, (err: string) => {
      this.message = err;
      $('.toast').toast('show');
    });
  }

  ngOnDestroy(): void {
    this.gu_sub?.unsubscribe();
    // this.authenticatorService.logout();
  }
}
