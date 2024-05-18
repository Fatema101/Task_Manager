import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../../../auth/services/storage/storage.service";

const BASIC_URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(BASIC_URL+'api/admin/users', {
      headers: this.createAuthrorizationHeader()
    });
  }

  postTask(taskDTO:any):Observable<any>{
    return this.http.post(BASIC_URL+'api/admin/task', taskDTO, {
      headers: this.createAuthrorizationHeader()
    });
  }

  deleteTask(id:number):Observable<any>{
    return this.http.delete(BASIC_URL+'api/admin/task/'+id, {
      headers: this.createAuthrorizationHeader()
    });
  }

  getAllTasks():Observable<any>{
    return this.http.get(BASIC_URL+'api/admin/tasks', {
      headers: this.createAuthrorizationHeader()
    });
  }

  private createAuthrorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer '+ StorageService.getToken()
      )
  }
}
