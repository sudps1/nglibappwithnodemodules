import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private AuthorService: AuthorService,private router: Router) { }
  authoritem = {
    authorname :'',
    genre:'',
    book1:'',
    book2:'',
    book3:'',
    imageUrl:''}

  ngOnInit(): void {
  }
  AddAuthor()
  {    
    this.AuthorService.newAuthor(this.authoritem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }
}


