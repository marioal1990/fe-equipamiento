import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { IndexProductoComponent } from './index-producto/index-producto.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';


@NgModule({
  declarations: [IndexProductoComponent, ViewProductoComponent, CreateProductoComponent, EditProductoComponent],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
