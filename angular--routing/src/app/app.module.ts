import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { UsersComponent } from './users/users.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestDirective } from './directives/test.directive';
import { AnimationsComponent } from './animations/animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    HomeComponent,
    TransactionHistoryComponent,
    UsersComponent,
    CustomPipe,
    ParentComponent,
    ChildComponent,
    TestDirective,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
