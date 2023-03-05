import { Component, ElementRef, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentit',
  templateUrl: './presentit.component.html',
  styleUrls: ['./presentit.component.css']
})
export class PresentitComponent {
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
