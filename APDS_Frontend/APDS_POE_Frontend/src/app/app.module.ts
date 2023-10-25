import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTaskComponent } from './task/get-task/get-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { DeleteTaskComponent } from './task/delete-task/delete-task.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticateInterceptor } from './user/authenticate.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GetTaskComponent,
    CreateTaskComponent,
    DeleteTaskComponent,
    CreateUserComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:AuthenticateInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
