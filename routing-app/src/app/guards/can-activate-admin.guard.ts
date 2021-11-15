import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticatorService } from '../services/authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdminGuard implements CanActivate {
  constructor(private router: Router, private authenticatorService: AuthenticatorService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authenticatorService.getToken()) {
      return true;
    }

    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
