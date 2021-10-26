import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarfallecidoComponent } from './editarfallecido.component';

describe('EditarfallecidoComponent', () => {
  let component: EditarfallecidoComponent;
  let fixture: ComponentFixture<EditarfallecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarfallecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarfallecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
