import { Component, OnInit } from '@angular/core';
import { Value } from 'src/app/_models/value';
import { ValueService } from '_services/value.service';
import { AlertsService } from '_services/Alerts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercises-detailed',
  templateUrl: './exercises-detailed.component.html',
  styleUrls: ['./exercises-detailed.component.css']
})
export class ExercisesDetailedComponent implements OnInit {
  value:Value;
  constructor(private valueService:ValueService,private alertify:AlertsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loadValue();
  }

  loadValue(){
    this.valueService.getValue(+this.route.snapshot.params['id']).subscribe((value:Value) =>{
      this.value=value;
    },error =>{
      this.alertify.error(error);
    })
  }

}
