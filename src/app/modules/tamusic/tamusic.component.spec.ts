import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamusicComponent } from './tamusic.component';

describe('TamusicComponent', () => {
  let component: TamusicComponent;
  let fixture: ComponentFixture<TamusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
