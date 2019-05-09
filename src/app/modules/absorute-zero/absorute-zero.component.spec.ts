import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsoruteZeroComponent } from './absorute-zero.component';

describe('AbsoruteZeroComponent', () => {
  let component: AbsoruteZeroComponent;
  let fixture: ComponentFixture<AbsoruteZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsoruteZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsoruteZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
