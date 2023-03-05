import { Component, ElementRef, Directive } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-technical-events',
  templateUrl: './technical-events.component.html',
  styleUrls: ['./technical-events.component.css']
})
export class TechnicalEventsComponent {
  constructor (private router: Router, {nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }
   }
  ngOnInit(): void {

  }

  geekout = () => this.router.navigateByUrl('/geekout');
  //brainit = () => this.router.navigateByUrl('/brainit');
  presentit = () => this.router.navigateByUrl('/presentit');
  hackathon = () => this.router.navigateByUrl('/hackathon');
  bughunt = () => this.router.navigateByUrl('/bughunt');
  projectpresentation = () => this.router.navigateByUrl('/projectpresentation');
  codeknights = () => this.router.navigateByUrl('/codeknights');
  techtalk = () => this.router.navigateByUrl('/techtalk');
}
