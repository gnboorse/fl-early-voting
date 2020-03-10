import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyVotingComponent } from './county-voting.component';

describe('CountyVotingComponent', () => {
  let component: CountyVotingComponent;
  let fixture: ComponentFixture<CountyVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
