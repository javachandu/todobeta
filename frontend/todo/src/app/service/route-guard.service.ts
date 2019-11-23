import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticatedService: HardcodedAuthenticationService,private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticatedService.isLoggedIn()) {
      return true;
    }
    //route the user of application to the login page if incorrect details are entered
    this.route.navigate(['/login'])
    return false;
  }
}
