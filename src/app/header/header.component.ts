import { Component, OnInit, ElementRef, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = ""
  constructor(private router: Router,{nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }


  }
  ngOnInit(){
   //this.name =  localStorage.getItem('name') || ""
  //  const queryString = window.location.search
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

  home = () => this.router.navigateByUrl('/home');
  about = () => this.router.navigateByUrl('/about');
  contact = () => this.router.navigateByUrl('/contact');

  technical_events = () => this.router.navigateByUrl('/technical_events');
  //non_technical_events = () => this.router.navigateByUrl('/non-technical_events');
  onlineevents = () => this.router.navigateByUrl('/onlineevents');
  workshops = () => this.router.navigateByUrl('/workshops');
  gallery = () => this.router.navigateByUrl('/gallery');
  sponsors = () => this.router.navigateByUrl('/sponsors');
  accomdation = () => this.router.navigateByUrl('/accomdation');

  logout = () => {
    localStorage.clear()
    this.router.navigateByUrl('/home')
}
login = () => {
    this.router.navigateByUrl('/login')
}
contests = () => this.router.navigateByUrl('/contests');
registeredevents = () => this.router.navigateByUrl('/registeredevents');

}
