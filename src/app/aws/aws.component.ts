import { Component, ElementRef, Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent implements OnInit {
  name2: any = ""
  ngOnInit(){
    //const queryString = window.location.search
    //const urlParams = new URLSearchParams(queryString)
    //let data : any = urlParams.get('q') || ""
    //console.log(urlParams)
    //console.log(data)
    //let dt = localStorage.getItem("q") || ""
    //if(dt.length == 0){
      //localStorage.setItem('q', data)
    //}

  //console.log(JSON.parse(data))
  //let data = JSON.parse(localStorage.getItem("q") || "")
  //this.name = data?.user_details.user_name || "";
  //console.log(this.name);

    //this.name =  sessionStorage.getItem('name') || ""
  let data3 : any = localStorage.getItem('q')
  console.log(data3)

  if (data3 == null){
    this.name2 = null
  }
  else{
    let data2 : any = JSON.parse(data3)
    this.name2 = data2?.user_details.user_name || "";
  }
   }
  constructor ({nativeElement}: ElementRef<HTMLImageElement>,private router: Router, private location: Location){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}
otherpay = () => this.router.navigateByUrl('/otherpay');
//registration = () => this.router.navigateByUrl('/Register');

}
