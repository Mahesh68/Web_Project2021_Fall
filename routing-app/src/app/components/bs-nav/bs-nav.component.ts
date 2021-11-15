import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticatorService } from 'src/app/services/authenticator.service';

@Component({
  selector: 'bs-nav',
  templateUrl: './bs-nav.component.html',
  styleUrls: ['./bs-nav.component.css']
})
export class BsNavComponent implements OnInit, OnDestroy {
  private isLoggedIn?: boolean;
  ili_sub?: Subscription;

  constructor(private authenticatorService: AuthenticatorService) { }

  ngOnInit(): void {
    this.ili_sub = this.authenticatorService.IsLoggedIn.subscribe((flag) => {
      this.isLoggedIn = flag;
    });
  }

  get IsLoggedIn() { return this.isLoggedIn; }

  ngOnDestroy(): void {
    this.ili_sub?.unsubscribe();
  }
}
