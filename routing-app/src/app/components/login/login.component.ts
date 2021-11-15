import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { fadeInAnimation } from 'src/app/animations/fade-in.animation';
import { AuthenticatorService } from 'src/app/services/authenticator.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl?: string;
  message?: string;
  login_sub?: Subscription;
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private authenticatorService: AuthenticatorService) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    this.authenticatorService.logout();
  }

  get f() { return this.loginForm?.controls; }

  onSubmit(e: Event) {
    if (this.loginForm.valid) {
      this.login_sub = this.authenticatorService.login(this.f.username.value, this.f.password.value)
        .pipe(first()).subscribe(_ => {
          this.router.navigate([this.returnUrl]);
        }, err => {
          this.message = err;
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.login_sub?.unsubscribe();
  }
}
