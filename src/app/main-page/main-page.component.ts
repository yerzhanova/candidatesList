import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService} from '../candidate.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [CandidateService]
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router,
              private candidateService: CandidateService) { }
  cardsOnPage = 10;
  enableMessage = false;
  count: number;
  ngOnInit() {
    this.getCandidates();
  }
  getCandidates(): void {
    this.candidateService.getCandidates()
      .subscribe(candidates => {
        if (candidates) {
          this.count = candidates.length;
        }
      });
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
