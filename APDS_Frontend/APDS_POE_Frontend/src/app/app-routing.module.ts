import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTaskComponent } from './task/get-task/get-task.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';

const routes: Routes = [
  {path: '', component:GetTaskComponent},
  {path: 'task', component:CreateTaskComponent},
  {path: 'user', component:LoginUserComponent},
  {path: 'signup', component:CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
