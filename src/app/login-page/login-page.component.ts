import { Component, OnInit, ElementRef, Directive } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private bk: BackendService, private router: Router, { nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;
    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }

  ngOnInit(): void { }
  // opensweetalert() {
  //   Swal.fire('Entered Details are accurate', "Login Successful", "success")
  // }
  // closesweetalert() {
  //   Swal.fire('Incorrect Details', "Enter required feilds", "error")
  // }
  onSubmit(userForm: any) {
    console.log(userForm);
    this.bk.fetchData('/login', userForm).subscribe((data) => {
      if (data.errno != undefined) {
        window.alert("User mistake")
        return
      }
      localStorage.setItem('name', data.user_details.user_name || "")
      localStorage.setItem('mail', data.user_details.user_mail || "")
      localStorage.setItem('events', JSON.stringify(data.registerd_events))
      if (localStorage.getItem("name")?.length != 0) {
        //this.opensweetalert()
        this.router.navigateByUrl('/home')
      }
      else {
        //this.closesweetalert()
        window.alert("Please complete the basic registration fee")
      }
    });
  }
  Register = () => this.router.navigateByUrl('/Register');


}
