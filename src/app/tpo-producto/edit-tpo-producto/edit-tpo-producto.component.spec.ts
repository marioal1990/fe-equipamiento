import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTpoProductoComponent } from './edit-tpo-producto.component';

describe('EditTpoProductoComponent', () => {
  let component: EditTpoProductoComponent;
  let fixture: ComponentFixture<EditTpoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTpoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTpoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
