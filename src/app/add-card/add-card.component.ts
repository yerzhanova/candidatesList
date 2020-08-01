import { Component, OnInit } from '@angular/core';
import { CandidateService} from '../candidate.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Candidate} from '../Candidate';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
  providers: [CandidateService]
})
export class AddCardComponent implements OnInit {

  constructor(private candidateService: CandidateService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
  ) { }
  newCandidate: Candidate = {
    id: 0,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    picture: ''
  };
  message =  '*Заполните все поля';
  saveEnable = true;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.newCandidate.id = Number(params.id);
    });
  }
  saveCard(): void {
    console.log(this.newCandidate);
    if (this.newCandidate.firstName === '' || this.newCandidate.lastName === '' || this.newCandidate.phoneNumber === '') {
      this.saveEnable = false;
    } else {
      if (this.newCandidate.picture === '') {
        this.newCandidate.picture = 'https://c7.hotpng.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar-thumbnail.jpg';
      }
      this.candidateService.createCandidate(this.newCandidate as Candidate).subscribe(candidate => {
        console.log(candidate, 'new user');
      });
      this.location.back();
    }
  }
  cancelAdding(): void {
    this.location.back();
  }
}
