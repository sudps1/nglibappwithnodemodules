import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router'
import { AuthorService } from '../author.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})



export class AuthorsComponent implements OnInit {

  constructor(private _router:Router,private AuthorService: AuthorService,
    public _auth:AuthService){

}
ngOnInit(): void{
  this.AuthorService.getAuthors().subscribe((data)=>{
    this.authors=JSON.parse(JSON.stringify(data));
})
}
editAuthor(author:any)
  {
    localStorage.setItem("editauthorId", author._id.toString());
    this._router.navigate(['authors/updateauthor']);

  }
deleteAuthor(author:any)
  {
    this.AuthorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })
  

  }
authors=[{
  authorname :'',
  genre:'',
  book1:'',
  book2:'', 
  book3:'',
  imageUrl:''}]



  loggedUser()
{
  this._router.navigate(['/add'])
}
}

