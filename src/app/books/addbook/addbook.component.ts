import { AddbookService } from './../../services/addbook.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';



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
  url

  task: AngularFireUploadTask;

  percentage: Observable<number>;

  snapshot: Observable<any>;

  downloadURL : Observable<string>;

  isHovering: boolean;

  toggleHover(event: boolean){
    this.isHovering = event;
  }
  startUpload(event: FileList){
    const file = event.item(0);
    if(file.type.split('/')[0] !== 'image'){
      this.toastr.error("Unsupported File type","Error:")
      return;
    }
    let time = new Date().getTime()
    const path = `propertyimages/${time}_${file.name}`;
    const customMetadata = {app: 'Mybrary'};
    this.task = this.storage.upload(path,file,{ customMetadata });
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap=>{
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.url = path;
          this.db.collection('photos').add( { path, size: snap.totalBytes })
          this.toastr.success("File uploaded Successfully!")
        }
      })
    );
  }
isActive(snapshot){
  return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes; 
}

  addBook(addBookForm: NgForm) {
    let image = this.url
    this.addBookService.addBook({image,...addBookForm.value}).then(data =>{
      addBookForm.reset()
      this.isAdded = true
    }).catch(err => {
      console.log(err)
    })
  }

}
