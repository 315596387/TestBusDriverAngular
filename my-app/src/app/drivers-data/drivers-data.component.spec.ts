import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversDataComponent } from './drivers-data.component';

describe('DriversDataComponent', () => {
  let component: DriversDataComponent;
  let fixture: ComponentFixture<DriversDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
