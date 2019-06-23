import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './home/index/index.component';
import { BooksComponent } from './books/books.component';
import { SinglebookComponent } from './books/singlebook/singlebook.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { Nav1Component } from './header/nav1/nav1.component';
import { Nav2Component } from './header/nav2/nav2.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './cart/item/item.component';
import { RentComponent } from './rent/rent.component';
import { RentalsComponent } from './rent/rentals/rentals.component';
import { AddbookComponent } from './books/addbook/addbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    BooksComponent,
    SinglebookComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    Nav1Component,
    Nav2Component,
    CartComponent,
    ItemComponent,
    RentComponent,
    RentalsComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
