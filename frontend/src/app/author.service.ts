import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  item= {
    authorname :'',
    genre:'',
    book1:'',
    book2:'',
    book3:'',
    imageUrl:''}
  
  constructor( private http:HttpClient) { }
  getAuthor(id:any){
    return this.http.get("http://localhost:3000/seven/"+id);
  }
  newAuthor(item:any)
  {   
    return this.http.post("http://localhost:3000/writter",{"writter":item})
    .subscribe(data =>{console.log(data)})
  }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  deleteAuthor(id:any)
  {

    return this.http.delete("http://localhost:3000/delete/"+id)

  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/renew",author)
    .subscribe(data =>{console.log(data)})
  }
  
}

