import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import sweetalert from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm = this.fb.group({
  username:["",[Validators.required]],
  password:["",[Validators.required,Validators.minLength(4)]],
})
  constructor(private bankService:BankService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  onLoginClick(){
    if(this.loginForm.valid){
    this.bankService.login(this.loginForm.value.username,this.loginForm.value.password)
    .subscribe((data:any)=>{
   sweetalert.fire("login success",data.message,"success");
      this.router.navigateByUrl("home");
    },data=>{
      sweetalert.fire("login failed","you provided invalid message!","error");
    });
  }else{
    alert("invalid details");
  }
}

 
}
