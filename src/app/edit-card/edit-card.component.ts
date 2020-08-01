import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../candidate.service';
import { Candidate } from '../Candidate';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css'],
  providers: [CandidateService]
})
export class EditCardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private candidateService: CandidateService) { }
  id: number;
  read: Candidate = {
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    picture: ''
  };
  saveEnable = true;
  message = '*Пожалуйста, заполните пустые поля';
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = Number(params.id) ;
      this.candidateService.getCandidate(this.id).subscribe(res => this.read = res );
    });
  }
  saveCandidate(): void {
    if (this.read.firstName === '' || this.read.lastName === '' || this.read.phoneNumber === '') {
      this.saveEnable = false;
    } else {
      this.candidateService.updateCandidate(this.read).subscribe(res => console.log(res));
      this.location.back();
    }
  }
  cancel(): void {
    this.location.back();
  }
}
