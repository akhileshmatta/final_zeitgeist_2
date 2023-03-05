import { Component, Directive, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onlineevents',
  templateUrl: './onlineevents.component.html',
  styleUrls: ['./onlineevents.component.css']
})
export class OnlineeventsComponent {
  constructor (private router: Router,{nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }
  }
  ngOnInit(): void {

  }
  brainit = () => this.router.navigateByUrl('/brainit');
  codewars = () => this.router.navigateByUrl('/codewars');
  webdev = () => this.router.navigateByUrl('/webdev');

}
