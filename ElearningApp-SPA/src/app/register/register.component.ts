import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '_services/Auth.service';
import { AlertsService } from '_services/Alerts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @Output() cancelRegister=new EventEmitter();
  model:any={};

  constructor(private authService:AuthService,private alertify: AlertsService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
      this.alertify.success('registration sucesfull');

    }, error =>{
      this.alertify.error(error);
    }
    
    
    );
  }

  cancle(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
