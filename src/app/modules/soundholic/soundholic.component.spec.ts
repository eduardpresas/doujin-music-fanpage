import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundholicComponent } from './soundholic.component';

describe('SoundholicComponent', () => {
  let component: SoundholicComponent;
  let fixture: ComponentFixture<SoundholicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundholicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
