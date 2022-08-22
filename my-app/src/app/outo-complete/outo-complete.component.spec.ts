import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutoCompleteComponent } from './outo-complete.component';

describe('OutoCompleteComponent', () => {
  let component: OutoCompleteComponent;
  let fixture: ComponentFixture<OutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutoCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
