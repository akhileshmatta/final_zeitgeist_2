import { Router, UrlTree } from '@angular/router';
import { BackendService } from './../services/backend.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {

  url_: any;
  constructor(private fb: FormBuilder, private bk: BackendService, private router: Router) {}
  ngOnInit() {

  }
  onSubmit(userForm: any) {
    let required = [
      'user_name',
      'user_mail',
      'phone_no',
      'user_password',
      'college_name',
      'city',
      'gender',
    ];
    for (const key of required) {
      if (userForm[key] == '') {
        window.alert(`Please enter the ${key}`);
        return;
      }
    }
    if (userForm.user_password < 8 || userForm.user_password !== userForm.cpassword) {
      window.alert('password too short or password mismatch');
      return;
    }

    console.log(userForm);
    this.bk.fetchData('/register', userForm).subscribe((data) => {
      if (data.errno === 200) {
        window.alert('Our .. will .. approch .. pay')
      } else if (data.errno === 401) {
        window.alert('Invalid referal code')
      } else if (data.errno === 402) {
        window.alert('Please enter required fields')
      }
    });
  }


  login = () => this.router.navigateByUrl('/login');

}
// form = new FormGroup ({
//   gender : new FormControl('', Validators.required)
// });
//   constructor( private bk: BackendService) { }
//   ngOnInit(): void {}
//   console.log(this)

// submit() {
//   console.log(this.form.value)
// }}
