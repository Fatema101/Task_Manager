import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {SignupComponent} from "./auth/components/signup/signup.component";
import {PostTaskComponent} from "./modules/admin/components/post-task/post-task.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "task", component: PostTaskComponent},
  {path: "admin", loadChildren:()=> import("./modules/admin/admin.module").then(e => e.AdminModule)},
  {path: "employee", loadChildren:()=> import("./modules/employee/employee.module").then(e => e.EmployeeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
