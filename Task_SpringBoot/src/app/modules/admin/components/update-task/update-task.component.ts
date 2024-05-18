import { Component } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {
  id:number = this.route.snapshot.params['id'];
  updateTaskForm!: FormGroup;
  listOfEmployees:any =[];
  listOfPriorities:any =["Low","Medium","High"];
  tasStatus:any =["PENDING", "INPROGRESS", "COMPLETED", "DEFERRED", "CANCELLED"];


  constructor(private service:AdminService,
              private fb: FormBuilder,
              private route:ActivatedRoute,
              private snackBar: MatSnackBar,
              private router:Router)
  {
    this.getUsers();
    this.getTaskById(this.id);
    this.updateTaskForm = this. fb.group({
      employeeId: [null,[Validators.required]],
      title: [null,[Validators.required]],
      description: [null,[Validators.required]],
      dueDate: [null,[Validators.required]],
      priority: [null,[Validators.required]],
      taskStatus: [null,[Validators.required]],

    })
  }

  getTaskById(id:number){
    this.service.getTaskById(id).subscribe(
      (res:any) => {
        this.updateTaskForm.patchValue(res)
        console.log(res);
      }
    )
  }
  getUsers(){
    this.service.getUsers().subscribe(
      (res) => {
        this.listOfEmployees = res;
        console.log(res);
      }
    );
  }

  updateTask(){
    this.service.updateTask(this.id, this.updateTaskForm.value).subscribe((res)=> {
      if (res.id!=null){
        this.snackBar.open("Task updated successfully","Close",{duration:5000});
        this.router.navigateByUrl("/admin/dashboard");
      }
      else {
        this.snackBar.open("Task updating failed","ERROR",{duration:5000, panelClass:"error-snackbar"});
      }
    })
  }
}
