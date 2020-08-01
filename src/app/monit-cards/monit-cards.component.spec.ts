import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitCardsComponent } from './monit-cards.component';

describe('MonitCardsComponent', () => {
  let component: MonitCardsComponent;
  let fixture: ComponentFixture<MonitCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitCardsComponent ]
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
