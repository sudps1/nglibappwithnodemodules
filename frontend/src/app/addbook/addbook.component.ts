import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})


export class AddbookComponent implements OnInit {

  constructor(private BookService: BookService,private router: Router){  } 
  bookitem= {
    title :'',
    genre:'',
    author:'',
    description:'',
    imageUrl:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddBook()
  {    
    this.BookService.newBook(this.bookitem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }
}
