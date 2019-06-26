import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  @Input('book') book
  constructor(public toastr:ToastrService,public storage:AngularFireStorage) { }
image:any
  ngOnInit() {
    this.image = this.storage.ref(this.book.image).getDownloadURL()
  }

}
