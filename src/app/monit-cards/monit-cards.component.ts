import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../Candidate';

@Component({
  selector: 'app-monit-cards',
  templateUrl: './monit-cards.component.html',
  styleUrls: ['./monit-cards.component.css'],
  providers: [CandidateService]
})
export class MonitCardsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private candidateService: CandidateService,
  ) { }

  data: Candidate [] = [];
  cardOnPage = 2;
  pager = {
    totalPages: 0,
    currentPage: 1,
    startIndex: 1,
    endIndex: 0
  };
  reads = [];
  addEnable = false;
  nextId: number;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.cardOnPage = Number(params.num);
      this.getCandidates();
    });
  }

  setPage(pageNumber): void {
    this.reads = this.data.slice((pageNumber - 1) * this.cardOnPage, (pageNumber - 1) * this.cardOnPage + this.cardOnPage);
    this.pager.currentPage = pageNumber;
  }

  showPages(num): void {
    this.pager.totalPages = Math.ceil(this.data.length / num );
    this.setPage(this.pager.currentPage);
  }

  getCandidates(): void {
    this.candidateService.getCandidates()
      .subscribe(candidates => {
        this.data = candidates;
        if (this.data) {
          this.showPages(this.cardOnPage);
          this.nextId = this.data.length + 1;
        }
      });
  }

  deleteCard(id): void {
    this.data = this.data.filter(c => c.id !== id);
    this.showPages(this.cardOnPage);
    if (Number(id) === this.data.length + 1 && this.pager.currentPage > 1) {
      this.setPage(this.pager.currentPage - 1);
    }
    this.candidateService.deleteCandidate(id).subscribe();
  }

  goToMain(): void {
    this.router.navigate(['/main-page']);
  }

  addCard(): void {
    this.addEnable = true;
    this.router.navigate(['/add-card', this.nextId]);
  }

  editCard(read): void {
    this.router.navigate(['/edit-card', read.id]);
  }
}
