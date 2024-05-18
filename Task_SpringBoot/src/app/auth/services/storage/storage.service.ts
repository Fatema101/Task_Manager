import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

const TOKEN = "token"
const USER = "user"
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  static saveToken(token: string): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }
  static
}