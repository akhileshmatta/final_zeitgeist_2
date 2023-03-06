import { Component, ElementRef, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent {
  name: string = ""
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
  let data = JSON.parse(localStorage.getItem("q") || "")
  this.name = data?.user_details.user_name || "";

    //this.name =  sessionStorage.getItem('name') || ""
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
