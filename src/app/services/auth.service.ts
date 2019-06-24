import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDetails=null;
  success = true;
  constructor(public FirebaseAuth: AngularFireAuth,public db:AngularFirestore, public router:Router,public toastr:ToastrService) { }
  signUp(email,password,mobile,dob,name,address){
    this.FirebaseAuth.auth.createUserWithEmailAndPassword(email,password).then(data=>{
      this.userDetails = data;
      this.db.collection('users').doc(data.user.uid).set({
        mobile: mobile,
        dob: dob,
        name: name,
        address: address
      })
      this.router.navigateByUrl('/auth/signin')
    }).catch(err=>{
      this.success = false;
      this.toastr.error(err.message,"Error:");

    })
    
  }
  logIn(email, password){
    this.FirebaseAuth.auth.signInWithEmailAndPassword(email, password).then(data=>{
      this.userDetails = data;
      this.router.navigateByUrl('/home')
    }).catch(err=>{
      this.toastr.error(err.message,"Error:");
      

    }) 
  }
}
