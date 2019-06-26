import { AddbookService } from './../../services/addbook.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage'

import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  isAdded: boolean;
  constructor(public addBookService: AddbookService,private storage: AngularFireStorage,private toastr:ToastrService,public db: AngularFirestore) { }

  ngOnInit() {
  }

  

  addBook(addBookForm: NgForm) {
    let image = this.addBookService.url
    this.addBookService.addBook({image,...addBookForm.value}).then(data =>{
      addBookForm.reset()
      this.isAdded = true
    }).catch(err => {
      console.log(err)
    })
  }

}
