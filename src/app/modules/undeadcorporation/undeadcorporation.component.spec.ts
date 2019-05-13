import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndeadcorporationComponent } from './undeadcorporation.component';

describe('UndeadcorporationComponent', () => {
  let component: UndeadcorporationComponent;
  let fixture: ComponentFixture<UndeadcorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndeadcorporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndeadcorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
