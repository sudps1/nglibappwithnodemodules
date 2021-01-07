import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  item= {
    firstname :'',
    lastnane:'',
    username:'',
    email:'',
    mobno:'',
    password:''}
  constructor(private http:HttpClient) { }
  newUser(item:any)
  {   
    return this.http.post("http://localhost:3000/userdetails",{"user":item})
    .subscribe(data =>{console.log(data)})
  }
}
