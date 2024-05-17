import { Component } from '@angular/core';
import {AdminService} from "../services/admin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrl: './post-task.component.css'
})
export class PostTaskComponent {

  taskForm!: FormGroup;
  listOfEmployees:any =[];
  listOfPriorities:any =["LOW","MEDIUM","HIGH"];
  constructor(private adminService:AdminService,
              private fb: FormBuilder,
              private router:Router,
              private snackBar: MatSnackBar)
  {
    this.getUsers();
    this.taskForm = this. fb.group({
      employeeId: [null,[Validators.required]],
      title: [null,[Validators.required]],
      description: [null,[Validators.required]],
      dueDate: [null,[Validators.required]],
      priority: [null,[Validators.required]]
    })
  }

  getUsers(){
    this.adminService.getUsers().subscribe(
      (res) => {
        this.listOfEmployees = res;
        console.log(res);
      }
    );
  }

  postTask(){
    this.adminService.postTask(this.taskForm.value).subscribe((res)=> {
      if (res.id!=null){
        this.snackBar.open("Task posted successfully","Close",{duration:5000});
        this.router.navigateByUrl("/admin/dashboard");
      }
      else {
        this.snackBar.open("Task posting failed","ERROR",{duration:5000, panelClass:"error-snackbar"});
      }
    })
  }

}
