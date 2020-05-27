import { Component, OnInit } from '@angular/core';
import { AuthService } from '_services/Auth.service';
import { AlertsService } from '_services/Alerts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};

  constructor(private authService:AuthService,private alertify: AlertsService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('User has logged in');
    }, error =>{
      this.alertify.error(error);
    });
    
  }
  loggedIn(){
    const token=localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    this.alertify.messege('logged out');
  }

}
