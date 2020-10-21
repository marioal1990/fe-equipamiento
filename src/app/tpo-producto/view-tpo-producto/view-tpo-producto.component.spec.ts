import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTpoProductoComponent } from './view-tpo-producto.component';

describe('ViewTpoProductoComponent', () => {
  let component: ViewTpoProductoComponent;
  let fixture: ComponentFixture<ViewTpoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTpoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTpoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
