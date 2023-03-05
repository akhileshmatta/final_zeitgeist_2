import { Component, OnInit, ElementRef, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit{
  constructor (private router: Router,{nativeElement}: ElementRef<HTMLImageElement>){
    const supports = 'loading' in HTMLImageElement.prototype;


  if (supports){
    nativeElement.setAttribute('loading', 'lazy');
  }
   }
  ngOnInit(): void {

  }
blockchain = () => this.router.navigateByUrl('/blockchain');
ethicalhacking = () => this.router.navigateByUrl('/ethicalhacking');
datascience = () => this.router.navigateByUrl('/datascience');
aws = () => this.router.navigateByUrl('/aws');

}
