import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirimagenComponent } from './subirimagen.component';

describe('SubirimagenComponent', () => {
  let component: SubirimagenComponent;
  let fixture: ComponentFixture<SubirimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirimagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
