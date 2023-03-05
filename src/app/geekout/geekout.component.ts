import { Component, ElementRef, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geekout',
  templateUrl: './geekout.component.html',
  styleUrls: ['./geekout.component.css']
})
export class GeekoutComponent {
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
