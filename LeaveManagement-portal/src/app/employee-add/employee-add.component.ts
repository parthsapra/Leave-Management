import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConnectService } from '../api-connect.service';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private apiConnect: ApiConnectService, private formBuilder: FormBuilder, private router: Router) { }
  employeeAddFormGroup: FormGroup;
  ngOnInit(): void {
    this.employeeAddFormGroup = this.formBuilder.group({
      employeeId: ["", Validators.required],
      employeeName: ["", Validators.required],
      contactNumber: ["", Validators.required],
    });
  }
  addEmployee() {
    console.log(this.employeeAddFormGroup.value);
    this.apiConnect.addLeave(this.employeeAddFormGroup).subscribe((result) => {
      this.router.navigate(['']);
    }, (err) => {
      console.log(err);
    });
  }
}
