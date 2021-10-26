import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafallecidosComponent } from './listafallecidos.component';

describe('ListafallecidosComponent', () => {
  let component: ListafallecidosComponent;
  let fixture: ComponentFixture<ListafallecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListafallecidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListafallecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
