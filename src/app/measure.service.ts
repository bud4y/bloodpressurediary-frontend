import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {
  medicalReport : [];
  constructor(private http: Http) { }


  getData(){
    return this.http.get(environment.apiEndpoint + "measure_details").map(res=>{
      return res.json()
    })
  }

}

