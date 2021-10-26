import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarfallecidoComponent } from './eliminarfallecido.component';

describe('EliminarfallecidoComponent', () => {
  let component: EliminarfallecidoComponent;
  let fixture: ComponentFixture<EliminarfallecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarfallecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarfallecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
