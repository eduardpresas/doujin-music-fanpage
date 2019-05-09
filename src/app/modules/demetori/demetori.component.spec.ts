import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemetoriComponent } from './demetori.component';

describe('DemetoriComponent', () => {
  let component: DemetoriComponent;
  let fixture: ComponentFixture<DemetoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemetoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemetoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
