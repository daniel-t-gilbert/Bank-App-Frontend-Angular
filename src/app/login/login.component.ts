import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//3rd execute

  // properties
  aim="your perfect banking partner";

  accounts="Enter account no. here";

  acno= "";
  pswd= "";

  //user defined functions //4th execute

  acnoChange(event:any){
    this.acno=event.target.value;
    console.log(this.acno);
  }

  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
  }

  // login(){
  //   // alert("login clicked");
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert("login succesful");
  //     }
  //     else{
  //       alert("invalid password");
  //     }
  //   }
  //   else{
  //     alert("invalid user details");
  //   }
  // }

  login(a:any , p:any){
    // alert("login clicked");
    var acno=a.value; 
    var pswd=p.value;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert("login succesful");
      }
      else{
        alert("invalid password");
      }
    }
    else{
      alert("invalid user details");
    }
  }

  userDetails:any={//object of objects
    1000:{acno:1000,username:'daniel',password:1000,balance:1000},
    1001:{acno:1001,username:'anna',password:1001,balance:1000},
    1002:{acno:1002,username:'alphy',password:1002,balance:1000},
  }

  constructor() { } //1st execute
  //spcl member function, automaticallly involks when an object created

  ngOnInit(): void {//2nd execute- life cycle hooks of angular
    //initial process of component initialization
  }

}
