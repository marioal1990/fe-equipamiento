import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TpoProductoRoutingModule } from './tpo-producto-routing.module';
import { IndexTpoProductoComponent } from './index-tpo-producto/index-tpo-producto.component';
import { ViewTpoProductoComponent } from './view-tpo-producto/view-tpo-producto.component';
import { CreateTpoProductoComponent } from './create-tpo-producto/create-tpo-producto.component';
import { EditTpoProductoComponent } from './edit-tpo-producto/edit-tpo-producto.component';


@NgModule({
  declarations: [IndexTpoProductoComponent, ViewTpoProductoComponent, CreateTpoProductoComponent, EditTpoProductoComponent],
  imports: [
    CommonModule,
    TpoProductoRoutingModule
  ]
})
export class TpoProductoModule { }
