import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFallecidoComponent } from './info-fallecido.component';

describe('InfoFallecidoComponent', () => {
  let component: InfoFallecidoComponent;
  let fixture: ComponentFixture<InfoFallecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFallecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFallecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
