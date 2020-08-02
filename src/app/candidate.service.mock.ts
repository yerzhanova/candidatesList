import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Candidate} from './Candidate';

export class MockHeroService {
  getCandidates(): Observable<Candidate[]> {
    return of([]);
  }

  getCandidate() {
    return of({});
  }

  createCandidate(): Observable<Candidate[]> {
    return of([]);
  }

  updateCandidate(): Observable<Candidate[]> {
    return of([]);
  }

  deleteCandidate(): Observable<Candidate[]> {
    return of([]);
  }
}
