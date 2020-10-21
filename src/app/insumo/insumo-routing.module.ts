import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexInsumoComponent } from './index-insumo/index-insumo.component';
import { ViewInsumoComponent } from './view-insumo/view-insumo.component';
import { CreateInsumoComponent } from './create-insumo/create-insumo.component';
import { EditInsumoComponent } from './edit-insumo/edit-insumo.component';
  
const routes: Routes = [
  { path: 'insumo', redirectTo: 'insumo/index', pathMatch: 'full'},
  { path: 'insumo/index',     component: IndexInsumoComponent },
  { path: 'insumo/:id/view',  component: ViewInsumoComponent },
  { path: 'insumo/create',    component: CreateInsumoComponent },
  { path: 'insumo/:id/edit',  component: EditInsumoComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsumoRoutingModule { }
