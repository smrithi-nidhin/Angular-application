import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import sweetalert from 'sweetalert2';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 balance="";
   depositForm=this.fb.group({
     dpUsername:["",[Validators.required]],
     dpAmount:["",[Validators.required]],
   });

   withdrawForm=this.fb.group({
    wdUsername:["",[Validators.required]],
    wdAmount:["",[Validators.required]],
  })
  constructor(private bankService: BankService,private fb:FormBuilder) { }

  
  ngOnInit(): void {
  }

  withdraw(){
    this.bankService.deposit(this.withdrawForm.value.wdUsername,this.withdrawForm.value.wdAmount)
    .subscribe((data:any)=>{
     
      this.balance=data.balance;
      this.withdrawForm.reset();
      sweetalert.fire("withdraw success",data.message,"success");
    },data=>{
      sweetalert.fire("withdraw failed","you provided invalid messages","error");
    });
  }

  deposit(){
    this.bankService.deposit(this.depositForm.value.dpUsername,this.depositForm.value.dpAmount)
    .subscribe((data:any)=>{
    
      this.balance=data.balance;
      this.depositForm.reset();
      sweetalert.fire("Deposit success",data.message,"success");
    },data=>{
      sweetalert.fire("Deposit failed","you provided invalid messages","error");
    });
  }



}
