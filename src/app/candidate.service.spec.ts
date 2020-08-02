import { TestBed, inject } from '@angular/core/testing';
import { CandidateService } from './candidate.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
describe('CandidateService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidateService, HttpClient],
      imports: [ HttpClientTestingModule ]
    });
  });
  // candidateService = TestBed.get(CandidateService);
  it('should be created', inject([CandidateService], (service: CandidateService) => {
    expect(service).toBeTruthy();
  }));
});
