import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkatsukiRecordsComponent } from './akatsuki-records.component';

describe('AkatsukiRecordsComponent', () => {
  let component: AkatsukiRecordsComponent;
  let fixture: ComponentFixture<AkatsukiRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkatsukiRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkatsukiRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
