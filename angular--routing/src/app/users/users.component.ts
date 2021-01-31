import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import sweetalert from 'sweetalert2';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users=[];
  constructor(private bankService:BankService) { }

  ngOnInit(): void {
   this.loadUsers();
  }
  loadUsers(){
    this.bankService.users().subscribe((data:any)=>{
      this.users=data.users;
    })
  }
  deleteUser(id){
    this.bankService.deleteUser(id)
    .subscribe((data:any)=>{
      sweetalert.fire("delete success",data.message,"success");
      this.loadUsers();
    },data=>{
      sweetalert.fire("delete failed","U provide invalid message","error");
    })
  }
}
