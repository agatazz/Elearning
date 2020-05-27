import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

constructor() { }

confirm(messege:string,okCallback:()=>any){
  alertify.confirm(messege,(event:any) =>{
    if(event){
      okCallback();
    }else{

    }
  });
}

success(messege: string){
  alertify.success(messege);
}

error(messege: string){
  alertify.error(messege);
}

messege(messege: string){
  alertify.messege(messege);
}

warning(messege: string){
  alertify.warning(messege);
}

}
