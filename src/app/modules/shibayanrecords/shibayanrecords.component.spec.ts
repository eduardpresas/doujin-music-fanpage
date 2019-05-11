import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShibayanrecordsComponent } from './shibayanrecords.component';

describe('ShibayanrecordsComponent', () => {
  let component: ShibayanrecordsComponent;
  let fixture: ComponentFixture<ShibayanrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShibayanrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShibayanrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
