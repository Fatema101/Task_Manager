import { Component } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  listOfTasks:any = [];
  constructor(private service:EmployeeService) {
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
}
