import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl="http://localhost:4000";
@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor( private http: HttpClient) { }

  login(username,password){
  return this.http.post(baseUrl+"/users/login",{
     username,
     password
   }, { withCredentials:true });
  }
  deposit(username,amount){
    return this.http.post(baseUrl+"/users/deposit",{
      username,
      amount
    }, { withCredentials:true });
  }
  withdraw(username,amount){
    return this.http.post(baseUrl+"/users/withdraw",{
      username,
      amount
    }, { withCredentials:true });
  }

  history(){
    return this.http.get(baseUrl+"/users/transaction-history",{ withCredentials:true })
  }

  users(){
    return this.http.get(baseUrl+"/users",{ withCredentials:true })
  }
  deleteUser(id){
    return this.http.delete(baseUrl+"/users/"+id,{ withCredentials:true })
  }
}
