import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingTracksComponent } from './coding-tracks.component';

describe('CodingTracksComponent', () => {
  let component: CodingTracksComponent;
  let fixture: ComponentFixture<CodingTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
