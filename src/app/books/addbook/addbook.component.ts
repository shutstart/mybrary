import { AddbookService } from './../../services/addbook.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  isAdded: boolean;
  constructor(public addBookService: AddbookService) { }

  ngOnInit() {
  }
  addBook(addBookForm: NgForm) {
    this.addBookService.addBook(addBookForm.value).then(data =>{
      addBookForm.reset()
      this.isAdded = true
    }).catch(err => {
      console.log(err)
    })
  }

}
