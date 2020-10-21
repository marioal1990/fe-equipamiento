import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTpoProductoComponent } from './create-tpo-producto.component';

describe('CreateTpoProductoComponent', () => {
  let component: CreateTpoProductoComponent;
  let fixture: ComponentFixture<CreateTpoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTpoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTpoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
