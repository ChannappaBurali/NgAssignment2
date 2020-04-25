import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service'
import {Model} from '../model/model'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uList:string[];
  userL:Model[]=[{firstName:'arohi',lastName:'hanbar',userName:'arohi',password:'123',isAdmin:true},
  {firstName:'abc',lastName:'abc',userName:'abc',password:'123',isAdmin:false}];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  delete(uname:string,isAdmin:boolean){  
    if(!isAdmin)
    this.userL.pop().userName=uname;
    else
    alert("Only admin can Delete!!");
  }
getResgisteredUsers(fname,lname,uname,pass,isAdmin){
  this.userL=[{firstName:fname,lastName:lname,userName:uname,password:pass,isAdmin:isAdmin}];
  //this.userL.push({firstName:'arohi',lastName:'hanbar',userName:'arohi',password:'123',isAdmin:true});
  //this.uList.push(localStorage.getItem('arohi'));
  //let item = JSON.parse(localStorage.getItem('arohi'));
//this.userL=this.service.getResgisteredUsers();
console.log(this.userL);
}
}
