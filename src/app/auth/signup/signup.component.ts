import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public auth:AuthService,private toastr:ToastrService) { }

  ngOnInit() {
  }
  signup(signupForm:NgForm){
    console.log(signupForm.value)
   this.auth.signUp(signupForm.value.email,signupForm.value.password,signupForm.value.mobile,signupForm.value.dob,signupForm.value.name,signupForm.value.address)
   signupForm.reset()
   if(this.auth.success){
     this.toastr.success("Signed up successfully")
   }
}
}
