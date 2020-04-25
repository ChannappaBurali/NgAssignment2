import { Injectable } from '@angular/core';
import {Model} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userList:string[];
  userL:Model[];
key:number=0;
  constructor(private model:Model) { }
  authenticate(username,password){    
if(username==="abc" && password==="abc"){
return true;
}
else
return false;
  }

  register(fname,lname,uname,pass,isAdmin){ 
 // this.userL.push({firstName:fname,lastName:lname,userName:uname,password:pass,isAdmin:isAdmin});
  this.userL=[{firstName:fname,lastName:lname,userName:uname,password:pass,isAdmin:isAdmin}];
   // let myObj = { firstName:fname, lastName:lname,userName:uname,password:pass,isAdmin:isAdmin };
    //localStorage.setItem(uname, JSON.stringify(myObj));  
    //this.userList[this.userList.length - 1].firstName=fname;
    //this.userList[this.userList.length - 1].lastName=lname;
    //this.userList[this.userList.length - 1].userName=uname;
    //this.userList[this.userList.length - 1].password=pass;
  }
getResgisteredUsers(){

  //this.userList.push(localStorage.getItem('arohi'));
 // for (let i = 0; i < localStorage.length; i++){
   // let key = localStorage.key(i);
    //let value = localStorage.getItem(key);
    //this.userList.push(key,value)
 // }
return this.userL;  
}
}
