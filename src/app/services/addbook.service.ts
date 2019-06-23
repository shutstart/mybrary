import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddbookService {

  constructor(private db:AngularFirestore) { }

  addBook(book){
    let createdOn = new Date()
    return this.db.collection('books').add({createdOn,...book})
  }
}
