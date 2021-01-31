import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { ParentComponent } from './parent/parent.component';
import { AnimationsComponent } from './animations/animations.component';


const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'home', component: HomeComponent },
  {path:'users', component: UsersComponent },
  {path:'transaction-history', component: TransactionHistoryComponent },
  {path: 'parent', component: ParentComponent},
  {path: 'animations', component: AnimationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
