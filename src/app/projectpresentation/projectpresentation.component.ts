import { Component, ElementRef, Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectpresentation',
  templateUrl: './projectpresentation.component.html',
  styleUrls: ['./projectpresentation.component.css']
})
export class ProjectpresentationComponent implements OnInit{
 name: string = ""
   ngOnInit(){
     //this.name =  localStorage.getItem('name') || ""
  //    const queryString = window.location.search
  //   const urlParams = new URLSearchParams(queryString)
  //   let data : any = urlParams.get('q') || ""
  //   console.log(urlParams)
  //   console.log(data)
  //   let dt = localStorage.getItem("q") || ""
  //   if(dt.length == 0){
  //     localStorage.setItem('q', data)
  //   }

  // console.log(JSON.parse(data))
  let data = JSON.parse(localStorage.getItem("q") || "")
  this.name = data?.user_details.user_name || "";
    }
  constructor ({nativeElement}: ElementRef<HTMLImageElement>, private router: Router){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}
otherpay = () => this.router.navigateByUrl('/otherpay');
//registration = () => this.router.navigateByUrl('/Register');

}
