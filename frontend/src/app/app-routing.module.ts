import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';

const routes: Routes = [
      {
        path:'',component: HomebodyComponent
      },
      {
        path:'login',component: LoginComponent 
      },
      {
        path:'signup',component: SignupComponent 
      },
      {
        path:'welcome',component:WelcomeComponent
      },
      {
        path:'books',component:BooksComponent
      },
      {
        path:'authors',component: AuthorsComponent
      },
      {
        path:'books/addbook',
        canActivate: [AuthGuard],
        component:AddbookComponent
      },
      {
        path:'authors/addauthor',
        canActivate: [AuthGuard],
        component:AddauthorComponent
      },
      {
        path:'books/updatebook',
        canActivate: [AuthGuard],
        component: UpdatebookComponent
      },
      {
        path:'authors/updateauthor',
        canActivate: [AuthGuard],
        component: UpdateauthorComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
