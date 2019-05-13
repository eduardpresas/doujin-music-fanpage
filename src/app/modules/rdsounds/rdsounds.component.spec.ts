import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsoundsComponent } from './rdsounds.component';

describe('RdsoundsComponent', () => {
  let component: RdsoundsComponent;
  let fixture: ComponentFixture<RdsoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdsoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
