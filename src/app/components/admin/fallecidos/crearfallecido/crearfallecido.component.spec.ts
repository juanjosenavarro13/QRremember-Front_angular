import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearfallecidoComponent } from './crearfallecido.component';

describe('CrearfallecidoComponent', () => {
  let component: CrearfallecidoComponent;
  let fixture: ComponentFixture<CrearfallecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearfallecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearfallecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
