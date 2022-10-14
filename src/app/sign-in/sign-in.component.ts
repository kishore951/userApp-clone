import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private myrouter:Router) { }

  userName=""
  password=""

  status:boolean=false

  readValues=()=>{
    let data ={
      "userName":this.userName,
      "password":this.password
    }
    if(this.userName=="admin" && this.password=="12345"){
      this.myrouter.navigate(["/dashboard"])
    }
    else{
      alert("invalid Login")
    }

    console.log(data)
    this.userName=""
 this.password=""
 this.status=true
    
  }

  ngOnInit(): void {
  }

}
