import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveNeetsComponent } from './active-neets.component';

describe('ActiveNeetsComponent', () => {
  let component: ActiveNeetsComponent;
  let fixture: ComponentFixture<ActiveNeetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveNeetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveNeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
