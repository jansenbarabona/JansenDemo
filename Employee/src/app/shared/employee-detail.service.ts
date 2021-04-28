import { Injectable } from '@angular/core';
import {EmployeeDetail} from './employee-detail.model'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http: HttpClient) {}

    readonly baseUrl = 'https://localhost:44334/api/EmployeeDetailss'
    formDate : EmployeeDetail = new EmployeeDetail();
    list:EmployeeDetail[];

  

   
}
