import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service'


@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})

export class UpdatebookComponent implements OnInit {
  bookitem= {
    title :'',
    genre:'',
    author:'',
    description:'',
    imageUrl:''}
 
  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editbookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.bookitem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookService.editBook(this.bookitem);   
    alert("Success");
    this.router.navigate(['books']);
  }

}