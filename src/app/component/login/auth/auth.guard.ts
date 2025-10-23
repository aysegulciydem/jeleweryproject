import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard çalıştı');
      if(isPlatformBrowser(this.platformId)){
        const isLoggedIn = 
              localStorage.getItem('isLoggedIn') === 'true' ||
              sessionStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
        return true;
      }     
      console.log('Login değil, yönlendiriliyor');  
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
      
    }
    return false;
  }
}
