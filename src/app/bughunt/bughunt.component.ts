import { Component, Directive, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bughunt',
  templateUrl: './bughunt.component.html',
  styleUrls: ['./bughunt.component.css']
})
export class BughuntComponent {
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
