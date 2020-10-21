import { Component, OnInit } from '@angular/core';
import {MeasureService} from '../measure.service';
import {MedicalMeteorology} from '../../interfaces/medical-meteorology';
import {UserService} from '../user.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  myData: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.myData = this.userService.saveData;
  }
}
