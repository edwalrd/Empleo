import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterTemplatesComponent } from './poster-templates.component';

describe('PosterTemplatesComponent', () => {
  let component: PosterTemplatesComponent;
  let fixture: ComponentFixture<PosterTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
