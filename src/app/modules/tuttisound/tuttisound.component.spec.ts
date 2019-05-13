import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuttisoundComponent } from './tuttisound.component';

describe('TuttisoundComponent', () => {
  let component: TuttisoundComponent;
  let fixture: ComponentFixture<TuttisoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuttisoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuttisoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
