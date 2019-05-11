import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlifejapanComponent } from './olifejapan.component';

describe('OlifejapanComponent', () => {
  let component: OlifejapanComponent;
  let fixture: ComponentFixture<OlifejapanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlifejapanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlifejapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
