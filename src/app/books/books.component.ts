import { Component, OnInit } from '@angular/core';
import { BuybookService } from '../services/buybook.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books=[]
  selectedBook
  mode='list' //list or single
  constructor(public BuybookService:BuybookService) { }

  ngOnInit() {
    this.getBooks()
  }

  getBooks(){
    this.BuybookService.getAllBooks().subscribe(res=>{
      this.books = res
      console.log(this.books)
    })
  }

  ViewDetails(book){
    this.mode='single'
    this.selectedBook=book
  }
}
