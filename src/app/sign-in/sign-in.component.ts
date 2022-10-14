import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
  userName=""
  password=""
  status:boolean=false
  readValues=()=>{
    let data ={
      "userName":this.userName,
      "password":this.password
    }
    console.log(data)
    this.userName=""
 this.password=""
 this.status=true
    
  }

  ngOnInit(): void {
  }

}
