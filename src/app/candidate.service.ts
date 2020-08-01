import { Injectable } from '@angular/core';
import { Candidate} from './Candidate';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CandidateService {

  constructor(
    private http: HttpClient,
    ) { }
  private candidatesUrl = 'api/candidates';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.candidatesUrl)
      .pipe(
        tap(_ => console.log('got candidates')),
        catchError(this.handleError<Candidate[]>('getCandidates', []))
      );
  }

  getCandidate(id: number): Observable<Candidate> {
    const url = `${this.candidatesUrl}/${id}`;
    return this.http.get<Candidate>(url).pipe(
      tap(_ => console.log(`get candidate id=${id}`)),
      catchError(this.handleError<Candidate>(`get candidate id=${id}`))
    );
  }

  createCandidate(candidate:  Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(this.candidatesUrl, candidate, this.httpOptions).pipe(
      tap((newCandidate: Candidate) => console.log(`added candidate id=${newCandidate.id}`)),
      catchError(this.handleError<Candidate>('addCandidate'))
    );
  }

  updateCandidate(candidate: Candidate): Observable<any> {
    return this.http.put(this.candidatesUrl, candidate, httpOptions).pipe(
      tap(_ => console.log(`updated candidate id=${candidate.id}`)),
      catchError(this.handleError<any>('update candidate'))
    );
  }

  deleteCandidate(id: number): Observable<Candidate>  {
    const url = `${this.candidatesUrl}/${id}`;
    return this.http.delete<Candidate>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted candidate id=${id}`)),
      catchError(this.handleError<Candidate>('deleteCandidate'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
