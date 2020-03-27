import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../api-connect.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  leaves: any = [];
  constructor(public apiConnect:ApiConnectService,private activatedRoute:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.leaves=[];
    this.apiConnect.getLeave().subscribe((data:{})=>{
      console.log(data);
      this.leaves=data;
    });
  }

}
