import { Component, OnInit } from '@angular/core';
import { AuthService } from '_services/Auth.service';
import { AlertsService } from '_services/Alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};

  constructor(private authService:AuthService,private alertify: AlertsService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('User has logged in');
      this.router.navigate(['/startpage']);
    }, error =>{
      this.alertify.error(error);
    });
    
  }
  loggedIn(){
    const token=localStorage.getItem('token');
    return !!token;
  }
  logout(){
    this.router.navigate(['/home']);
    localStorage.removeItem('token');
    this.alertify.messege('logged out');
    
  }

}
