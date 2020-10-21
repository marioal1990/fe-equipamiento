import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestamoRoutingModule } from './prestamo-routing.module';
import { IndexPrestamoComponent } from './index-prestamo/index-prestamo.component';
import { ViewPrestamoComponent } from './view-prestamo/view-prestamo.component';
import { CreatePrestamoComponent } from './create-prestamo/create-prestamo.component';
import { EditPrestamoComponent } from './edit-prestamo/edit-prestamo.component';


@NgModule({
  declarations: [IndexPrestamoComponent, ViewPrestamoComponent, CreatePrestamoComponent, EditPrestamoComponent],
  imports: [
    CommonModule,
    PrestamoRoutingModule
  ]
})
export class PrestamoModule { }
