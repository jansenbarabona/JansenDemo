import { Component, OnInit } from '@angular/core';
import {Ngform} from '@angular/forms';
import { EmployeeDetail } from 'src/app/shared/employee-detail.model';
import {ToastService} from 'ngx-toastr';


@Component({
  selector: 'app-employee-detail-form',
  templateUrl: './employee-detail-form.component.html',
  styles: [
  ]
})
export class EmployeeDetailFormComponent implements OnInit {

  constructor(public service: EmployeeDetail,
    private toastr: ToastService ) { }

  ngOnInit(): void {
  }

}
