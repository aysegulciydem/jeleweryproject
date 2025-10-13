import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ||
                       sessionStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      return true;
    } 
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
    
  }
}
