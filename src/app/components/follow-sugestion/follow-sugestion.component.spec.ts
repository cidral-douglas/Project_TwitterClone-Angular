import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowSugestionComponent } from './follow-sugestion.component';

describe('FollowSugestionComponent', () => {
  let component: FollowSugestionComponent;
  let fixture: ComponentFixture<FollowSugestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowSugestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowSugestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
