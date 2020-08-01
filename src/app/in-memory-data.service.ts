import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const candidates = [
      {
        id: 1,
        firstName: 'Amy',
        lastName: 'Taylor',
        phoneNumber: '617-564-3254',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg'
      },
      {
        id: 2,
        firstName: 'Anup',
        lastName: 'Gupta',
        phoneNumber: '617-564-1258',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg'
      },
      {
        id: 3,
        firstName: 'Ilon',
        lastName: 'Mask',
        phoneNumber: 'X Æ A-12',
        picture: 'https://img.joinfo.ua/i/2018/06/5b338dbd2934d.jpg'
      },
      {
        id: 4,
        firstName: 'Hassen',
        lastName: 'Li',
        phoneNumber: '617-564-1258',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg'
      },
      {
        id: 5,
        firstName: 'James',
        lastName: 'Blunt',
        phoneNumber: '6333-564-3254',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg'
      },
      {
        id: 6,
        firstName: 'Ali',
        lastName: 'Omar',
        phoneNumber: '111-564-1258',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg'
      },
      {
        id: 7,
        firstName: 'James',
        lastName: 'Blunt',
        phoneNumber: '6333-564-3254',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg'
      },
      {
        id: 8,
        firstName: 'Ali',
        lastName: 'Omar',
        phoneNumber: '111-564-1258',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg'
      },
      {
        id: 9,
        firstName: 'Farhi',
        lastName: 'Omar',
        phoneNumber: '111-564-1258',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg'
      }
    ];
    return {candidates};
  }

  // genId(candidates: Candidate[]): number {
  //   return candidates.length > 0 ? Math.max(...candidates.map(candidate => candidate.id)) + 1 : 11;
  // }
}
