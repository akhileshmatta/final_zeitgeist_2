import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-brainit',
  templateUrl: './brainit.component.html',
  styleUrls: ['./brainit.component.css']
})
export class BrainitComponent {
  constructor ({nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }

}
}
