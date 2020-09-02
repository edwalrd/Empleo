import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MipublicacionesComponent } from './mipublicaciones.component';

describe('MipublicacionesComponent', () => {
  let component: MipublicacionesComponent;
  let fixture: ComponentFixture<MipublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MipublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MipublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
