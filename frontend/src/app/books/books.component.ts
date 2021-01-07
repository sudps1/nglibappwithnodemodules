import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router'
import { BookService } from '../book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private _router:Router,private bookService: BookService,
    public _auth:AuthService){

}
ngOnInit(): void{
  this.bookService.getBooks().subscribe((data)=>{
    this.books=JSON.parse(JSON.stringify(data));
})
}
editBook(book:any)
  {
    localStorage.setItem("editbookId", book._id.toString());
    this._router.navigate(['books/updatebook']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })
  

  }
books=[{
  title :'',
  genre:'',
  author:'',
  description:'', 
  imageUrl:''}]



  loggedUser()
{
  this._router.navigate(['/add'])
}
}
