import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTemplateComponent } from './artist-template.component';

describe('ArtistTemplateComponent', () => {
  let component: ArtistTemplateComponent;
  let fixture: ComponentFixture<ArtistTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
