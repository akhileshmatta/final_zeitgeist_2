import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-technical-events',
  templateUrl: './non-technical-events.component.html',
  styleUrls: ['./non-technical-events.component.css']
})
export class NonTechnicalEventsComponent {
  constructor (private router: Router){ }
  ngOnInit(): void {

  }
  brainit = () => this.router.navigateByUrl('/brainit');
  codewars = () => this.router.navigateByUrl('/codewars');

}
