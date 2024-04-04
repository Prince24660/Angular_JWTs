import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { HomeComponent } from './component/home/home.component';
import { SupportComponent } from './component/support/support.component';
import { KhelmastiComponent } from './component/khelmasti/khelmasti.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"admin",component:AdminComponent},
  {path:"user",component:UserComponent},
  {path:"home",component:HomeComponent},
  {path:"support",component:SupportComponent},
  {path:"khelmasti",component:KhelmastiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
