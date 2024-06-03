import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-view-task-details',
  templateUrl: './view-task-details.component.html',
  styleUrl: './view-task-details.component.css'
})
export class ViewTaskDetailsComponent implements OnInit {
  taskId:number = this.activated.snapshot.params["id"];
  taskData:any;
  commentForm!: FormGroup;
  constructor(private service:AdminService,
              private activated : ActivatedRoute,
              private fb: FormBuilder,
              private snackbar: MatSnackBar) { }


  ngOnInit(): void {
    this.getTaskById();

    this.commentForm = this.fb.group({
      content: [null, Validators.required]
    })
  }
  getTaskById(){
    this.service.getTaskById(this.taskId).subscribe(
      (res) => {
        this.taskData = res;
        console.log(res);
      }
    );
  }

  publishComment(){
    const content = this.commentForm.get("content")?.value;
    this.service.createComment(this.taskId, content).subscribe(
      (res) => {
        if (res.id!=null){
          this.snackbar.open("Comment posted successfully","Close",{duration:5000});
        }
        else{
          this.snackbar.open("Failed to post comment","Close",{duration:5000});
        }
      }
    );
  }
}
