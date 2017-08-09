import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromecastsComponent } from './chromecasts.component';

describe('ChromecastsComponent', () => {
  let component: ChromecastsComponent;
  let fixture: ComponentFixture<ChromecastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromecastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromecastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
