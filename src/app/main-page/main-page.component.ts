import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }
  cardsOnPage = 10;
  enableMessage = false;
  ngOnInit() {
  }
  generatePages(): void {
    if (this.isNumber(this.cardsOnPage)) {
      this.router.navigate(['/monit-cards', this.cardsOnPage]);
    } else {
      this.enableMessage = true;
    }
  }
  isNumber(num): boolean {
    return (Number.isInteger(Number(num)) && Number(num) > 0);
  }
}
