import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private UserService: UserService,private router: Router) { }
  UserDetail= {
    firstname :'',
    lastnane:'',
    username:'',
    email:'',
    mobno:'',
    password:''

  }
  AddUser()
  {
    this.UserService.newUser(this.UserDetail);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }
  
  ngOnInit(): void {
  }

}
