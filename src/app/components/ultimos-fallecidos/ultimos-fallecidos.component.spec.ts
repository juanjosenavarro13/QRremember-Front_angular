import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosFallecidosComponent } from './ultimos-fallecidos.component';

describe('UltimosFallecidosComponent', () => {
  let component: UltimosFallecidosComponent;
  let fixture: ComponentFixture<UltimosFallecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimosFallecidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosFallecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
