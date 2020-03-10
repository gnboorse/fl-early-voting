import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCountyComponent } from './show-county.component';

describe('ShowCountyComponent', () => {
  let component: ShowCountyComponent;
  let fixture: ComponentFixture<ShowCountyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCountyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
