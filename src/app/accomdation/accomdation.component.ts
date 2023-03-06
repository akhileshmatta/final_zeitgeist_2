import { Component, ElementRef, Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accomdation',
  templateUrl: './accomdation.component.html',
  styleUrls: ['./accomdation.component.css']
})
export class AccomdationComponent implements OnInit {

  name2: any = ""
  ngOnInit(){
    //this.name =  localStorage.getItem('name') || ""
    //let data = JSON.parse(localStorage.getItem("q") || "")
    //this.name = data?.user_details.user_name || "";
    let data3 : any = localStorage.getItem("q")
  console.log(data3)

  if (data3 == null){
    this.name2 = null
  }
  else{
    let data2 : any = JSON.parse(data3)
    this.name2 = data2?.user_details.user_name || "";
  }
   }
   constructor ({nativeElement}: ElementRef<HTMLImageElement>,private router: Router){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}
   //otherpay = () => this.router.navigateByUrl('/otherpay');
//registration = () => this.router.navigateByUrl('/Register');
registrationpay = () => this.router.navigateByUrl('/registrationpay');
}
