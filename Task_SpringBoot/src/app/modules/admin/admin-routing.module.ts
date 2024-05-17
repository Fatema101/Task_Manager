import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostTaskComponent} from "./post-task/post-task.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "task", component: PostTaskComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
