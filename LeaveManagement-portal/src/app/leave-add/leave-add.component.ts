import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConnectService } from '../api-connect.service';

@Component({
  selector: 'app-leave-add',
  templateUrl: './leave-add.component.html',
  styleUrls: ['./leave-add.component.css']
})
export class LeaveAddComponent implements OnInit {
  // @Input leaveData = { employeeId: '', startDate: '', endDate: '', leaveDescription: '' };

  constructor(private apiConnect: ApiConnectService, private formBuilder: FormBuilder, private router: Router) { }
  leaveAddFormGroup: FormGroup;
  date = new Date();
  ngOnInit(): void {
    this.date.setDate(this.date.getDate() + 7);
    this.leaveAddFormGroup = this.formBuilder.group({
      employeeId: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      leaveDescription: [""]
    });
  }

  error: any = { isError: false, errorMessage: '' };
  validateStartDate() {
    if (new Date(this.leaveAddFormGroup.controls['startDate'].value) < this.date) { alert("entered date must be after 7 days"); }
  }
  compareTwoDates() {
    if (new Date(this.leaveAddFormGroup.controls['endDate'].value) < new Date(this.leaveAddFormGroup.controls['startDate'].value)) {
      this.error = { isError: true, errorMessage: 'End Date can not before start date' };
    }
    else {
      this.error = { isError: false, errorMessage: '' };
    }
  }
  addLeave() {
    console.log(this.leaveAddFormGroup.value);
    this.apiConnect.addLeave(this.leaveAddFormGroup).subscribe((result) => {
      this.router.navigate(['']);
    }, (err) => {
      console.log(err);
    });
  }
}
