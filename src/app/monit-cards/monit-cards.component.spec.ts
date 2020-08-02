import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { FormsModule} from '@angular/forms';
import { CandidateService} from '../candidate.service';
import { MockHeroService } from '../candidate.service.mock';
import { MonitCardsComponent } from './monit-cards.component';
import { HttpClient } from '@angular/common/http';

describe('MonitCardsComponent', () => {
  let component: MonitCardsComponent;
  let fixture: ComponentFixture<MonitCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitCardsComponent ],
      imports: [ RouterTestingModule, FormsModule, HttpClient ],
      providers: [{
        provide: CandidateService,
        useClass: MockHeroService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
