import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProgressBarComponent } from './card-progress-bar.component';

describe('CardProgressBarComponent', () => {
  let component: CardProgressBarComponent;
  let fixture: ComponentFixture<CardProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
