import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIndoorComponent } from './weather-indoor.component';

describe('WeatherIndoorComponent', () => {
  let component: WeatherIndoorComponent;
  let fixture: ComponentFixture<WeatherIndoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherIndoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIndoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
