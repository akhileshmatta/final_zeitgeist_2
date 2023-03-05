import { Component, ElementRef, Directive } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projectpresentation',
  templateUrl: './projectpresentation.component.html',
  styleUrls: ['./projectpresentation.component.css']
})
export class ProjectpresentationComponent {
 name: string = ""
   ngOnInit(){
     this.name =  localStorage.getItem('name') || ""
    }
  constructor ({nativeElement}: ElementRef<HTMLImageElement>, private router: Router){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}
otherpay = () => this.router.navigateByUrl('/otherpay');
registration = () => this.router.navigateByUrl('/Register');

}
