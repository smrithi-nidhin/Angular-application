import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
histories=[];
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.bankService.history()
    .subscribe((data:any)=>{
      this.histories=data.history;
    })

  }

}
