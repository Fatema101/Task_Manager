import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../../../auth/services/storage/storage.service";

const BASIC_URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getUsers():Observable<any>{
    return this.http.get(BASIC_URL+'api/admin/users', {
      headers: this.createAuthorizationHeader()
    });
  }

  postTask(taskDTO:any):Observable<any>{
    return this.http.post(BASIC_URL+'api/admin/task', taskDTO, {
      headers: this.createAuthorizationHeader()
    });
  }

  updateTask(id:number,taskDTO:any):Observable<any>{
    return this.http.put(BASIC_URL+`api/admin/task/${id}`, taskDTO, {
      headers: this.createAuthorizationHeader()
    });
  }

  searchTask(title:string):Observable<any>{
    return this.http.get(BASIC_URL+`api/admin/tasks/search/${title}`, {
      headers: this.createAuthorizationHeader()
    });
  }

  deleteTask(id:number):Observable<any>{
    return this.http.delete(BASIC_URL+'api/admin/task/'+id, {
      headers: this.createAuthorizationHeader()
    });
  }

  getEmployeeTaskById():Observable<any>{
    return this.http.get(BASIC_URL+'api/employee/tasks', {
      headers: this.createAuthorizationHeader()
    });
  }
  getTaskById(id:number):Observable<any>{
    return this.http.get(BASIC_URL+'api/admin/task/'+id, {
      headers: this.createAuthorizationHeader()
    });
  }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer '+ StorageService.getToken()
    )
  }

  updateStatus(id :number, status : string):Observable<any>{
    return this.http.get(BASIC_URL+`api/employee/task/${id}/${status}`, {
      headers: this.createAuthorizationHeader()
    });
  }
}
