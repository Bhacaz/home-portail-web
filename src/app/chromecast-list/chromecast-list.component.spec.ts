import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromecastListComponent } from './chromecast-list.component';

describe('ChromecastListComponent', () => {
  let component: ChromecastListComponent;
  let fixture: ComponentFixture<ChromecastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromecastListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromecastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
