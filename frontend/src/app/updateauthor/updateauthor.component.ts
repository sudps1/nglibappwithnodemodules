import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service'

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
  authoritem= {
    authorname :'',
    genre:'',
    book1:'',
    book2:'',
    book3:'',
    imageUrl:''}

  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editauthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.authoritem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.authorService.editAuthor(this.authoritem);   
    alert("Success");
    this.router.navigate(['authors']);
  }

}
