import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private router: Router){ }
  ngOnInit(): void {
  }

  home = () => this.router.navigateByUrl('/home');
  about = () => this.router.navigateByUrl('/about');
  contact = () => this.router.navigateByUrl('/contact');

  technical_events = () => this.router.navigateByUrl('/technical_events');
  //non_technical_events = () => this.router.navigateByUrl('/non-technical_events');
  onlineevents = () => this.router.navigateByUrl('/onlineevents');
  workshops = () => this.router.navigateByUrl('/workshops');
  gallery = () => this.router.navigateByUrl('/gallery');
  sponsors = () => this.router.navigateByUrl('/sponsors');


}
