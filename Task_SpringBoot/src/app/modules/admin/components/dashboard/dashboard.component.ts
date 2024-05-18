import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  listOfTasks:any = [];
  constructor(private adminService:AdminService,
              private fb: FormBuilder,
              private router:Router,
              private snackBar: MatSnackBar){
    this.getTasks();
  }

  getTasks(){
    this.adminService.getAllTasks().subscribe(
      (res) => {
        this.listOfTasks = res;
        console.log(res);
      }
    );
  }

  deleteTask(id:number){
    this.adminService.deleteTask(id).subscribe(
      (res) => {
        console.log(res);
        this.getTasks();
        this.snackBar.open("Task deleted successfully","Close",{duration:5000});
      }
    );
  }
}
