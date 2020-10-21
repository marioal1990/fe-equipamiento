import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTpoProductoComponent } from './index-tpo-producto.component';

describe('IndexTpoProductoComponent', () => {
  let component: IndexTpoProductoComponent;
  let fixture: ComponentFixture<IndexTpoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTpoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTpoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
