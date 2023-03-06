import { Component, ElementRef, Directive, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codewars',
  templateUrl: './codewars.component.html',
  styleUrls: ['./codewars.component.css']
})
export class CodewarsComponent implements OnInit {
  name : string = ""
  constructor ({nativeElement}: ElementRef<HTMLImageElement>,private router:Router ){
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
