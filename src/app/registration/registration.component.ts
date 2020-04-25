import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service'
import {Model} from '../model/model';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
firstName:string;
lastName:string;
username:string;
password:string;
isAdmin:boolean=false;
  constructor(private service:ServiceService,private model:Model) { }

  ngOnInit(): void {
  }
  register(){    
   this.service.register(this.firstName,this.lastName,this.username,this.password,this.isAdmin)
  }
}
