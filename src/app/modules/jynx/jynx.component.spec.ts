import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JynxComponent } from './jynx.component';

describe('JynxComponent', () => {
  let component: JynxComponent;
  let fixture: ComponentFixture<JynxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JynxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JynxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
