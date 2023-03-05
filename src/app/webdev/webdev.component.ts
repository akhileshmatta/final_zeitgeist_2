import { Component, ElementRef, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.css']
})
export class WebdevComponent {
  name : string = "";
  constructor ({nativeElement}: ElementRef<HTMLImageElement>, private router:Router){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}
ngOnInit(){

  this.name =  localStorage.getItem('name') || ""

}
otherpay = () => this.router.navigateByUrl('/otherpay');

}
