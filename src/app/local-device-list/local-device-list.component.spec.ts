import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDeviceListComponent } from './local-device-list.component';

describe('LocalDeviceListComponent', () => {
  let component: LocalDeviceListComponent;
  let fixture: ComponentFixture<LocalDeviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDeviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
