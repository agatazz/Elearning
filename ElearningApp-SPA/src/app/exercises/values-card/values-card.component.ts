import { Component, OnInit, Input } from '@angular/core';
import { Value } from 'src/app/_models/value';

@Component({
  selector: 'app-values-card',
  templateUrl: './values-card.component.html',
  styleUrls: ['./values-card.component.css']
})
export class ValuesCardComponent implements OnInit {
  @Input()value:Value;

  constructor() { }

  ngOnInit() {
  }

}
