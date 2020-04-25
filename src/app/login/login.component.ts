import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
username:string;
password:string;
isValidUser:boolean=false;
    constructor(private service:ServiceService,private route:Router)
     {
        // redirect to home if already logged in
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'      
    }
    login() {
if(this.service.authenticate(this.username,this.password)){
this.route.navigate(['dashboard']);
//console.log("success");
this.isValidUser=false;

}
else{    
this.isValidUser=true;
   // console.log("fail");
}
    }
    register(){
this.route.navigate(['register']);
    }
}
