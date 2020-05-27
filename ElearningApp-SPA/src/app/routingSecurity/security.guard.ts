import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '_services/Auth.service';
import { AlertsService } from '_services/Alerts.service';


@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router,private alertify:AlertsService) {}
  canActivate():boolean {
    if(this.authService.loggedIn()){
      return true;
    }
    this.alertify.error('Not authorised');
    this.router.navigate(['/home']);
    return false;
  }
  
}
