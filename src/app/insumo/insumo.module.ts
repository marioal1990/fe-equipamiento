import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsumoRoutingModule } from './insumo-routing.module';
import { IndexInsumoComponent } from './index-insumo/index-insumo.component';
import { ViewInsumoComponent } from './view-insumo/view-insumo.component';
import { CreateInsumoComponent } from './create-insumo/create-insumo.component';
import { EditInsumoComponent } from './edit-insumo/edit-insumo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexInsumoComponent, ViewInsumoComponent, CreateInsumoComponent, EditInsumoComponent],
  imports: [
    CommonModule,
    InsumoRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class InsumoModule { }
