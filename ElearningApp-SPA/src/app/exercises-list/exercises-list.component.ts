import { Component, OnInit, ValueSansProvider } from '@angular/core';
import { Value } from '../_models/value';
import { ValueService } from '_services/value.service';
import { AlertsService } from '_services/Alerts.service';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.css']
})
export class ExercisesListComponent implements OnInit {
  values:Value[];

  constructor(private valueService:ValueService,private alertify:AlertsService) { }

  ngOnInit() {
    this.loadValues();
  }

  loadValues(){
    this.valueService.getValues().subscribe((values : Value[]) =>{
      this.values=values;
    },error =>{
      this.alertify.error(error);
    }
    );
  }

}
