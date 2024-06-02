import { Component } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  listOfTasks:any = [];
  constructor(private service:EmployeeService, private snackBar: MatSnackBar) {
    this.getTasks();
  }

  getTasks(){
    this.service.getEmployeeTaskById().subscribe(
      (res) => {
        this.listOfTasks = res;
        console.log(res);
      }
    )
  }

  updateStatus(id: number, status: string){
    this.service.updateStatus(id, status).subscribe(
      (res) => {
        if(res.id != null){
          this.snackBar.open('Task Status updated successfully', 'Close', {
            duration: 5000,
          });
          console.log(res);
          this.getTasks();
        }
        else {
          this.snackBar.open('Getting error while updating Task', 'Close', {
            duration: 5000,
          });
        }
      }
    )
  }
}
