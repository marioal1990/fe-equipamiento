import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPrestamoComponent } from './index-prestamo/index-prestamo.component';
import { ViewPrestamoComponent } from './view-prestamo/view-prestamo.component';
import { CreatePrestamoComponent } from './create-prestamo/create-prestamo.component';
import { EditPrestamoComponent } from './edit-prestamo/edit-prestamo.component';
  
const routes: Routes = [
  { path: 'prestamo', redirectTo: 'prestamo/index', pathMatch: 'full'},
  { path: 'prestamo/index',     component: IndexPrestamoComponent },
  { path: 'prestamo/:id/view',  component: ViewPrestamoComponent },
  { path: 'prestamo/create',    component: CreatePrestamoComponent },
  { path: 'prestamo/:id/edit',  component: EditPrestamoComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamoRoutingModule { }
