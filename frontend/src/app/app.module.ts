import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { BookService } from './book.service';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AuthorService } from './author.service';
import { UserService } from './user.service';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomebodyComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    BooksComponent,
    AuthorsComponent,
    AddbookComponent,
    AddauthorComponent,
    UpdatebookComponent,
    UpdateauthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthService,UserService,BookService,AuthGuard,AuthorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
