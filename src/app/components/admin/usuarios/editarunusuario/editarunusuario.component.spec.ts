import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarunusuarioComponent } from './editarunusuario.component';

describe('EditarunusuarioComponent', () => {
  let component: EditarunusuarioComponent;
  let fixture: ComponentFixture<EditarunusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarunusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarunusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
