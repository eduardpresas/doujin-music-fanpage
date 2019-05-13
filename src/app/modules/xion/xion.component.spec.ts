import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XionComponent } from './xion.component';

describe('XionComponent', () => {
  let component: XionComponent;
  let fixture: ComponentFixture<XionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
