import { Component, OnInit } from '@angular/core';
import {EmployeeDetailService} from 'src/app/shared/employee-detail.service';
import {EmployeeDetail} from 'src/app/shared/employee-detail.model';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public service:EmployeeDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
   
  }

  populateForm(selectedRecord:EmployeeDetail ) {
    
  }



}
