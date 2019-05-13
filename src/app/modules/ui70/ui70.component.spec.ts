import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ui70Component } from './ui70.component';

describe('Ui70Component', () => {
  let component: Ui70Component;
  let fixture: ComponentFixture<Ui70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ui70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ui70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
