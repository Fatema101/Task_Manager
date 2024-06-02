import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-task-details',
  templateUrl: './view-task-details.component.html',
  styleUrl: './view-task-details.component.css'
})
export class ViewTaskDetailsComponent implements OnInit {
  taskId:number = this.activated.snapshot.params["id"];
  taskData:any;
  constructor(private service:AdminService,
              private activated : ActivatedRoute) { }


  ngOnInit(): void {
    this.getTaskById();
  }
  getTaskById(){
    this.service.getTaskById(this.taskId).subscribe(
      (res) => {
        this.taskData = res;
        console.log(res);
      }
    );
  }
}
