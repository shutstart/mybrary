import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './books/addbook/addbook.component'
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: 'allbooks', component: BooksComponent},
  {path: 'addbook', component: AddbookComponent},
  {path: 'home', component: HomeComponent},
  { path: 'auth', component: AuthComponent,children:[
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
