import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexProductoComponent } from './index-producto/index-producto.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
  
const routes: Routes = [
  { path: 'producto', redirectTo: 'producto/index', pathMatch: 'full'},
  { path: 'producto/index',       component: IndexProductoComponent },
  { path: 'producto/:serie/view', component: ViewProductoComponent },
  { path: 'producto/create',      component: CreateProductoComponent },
  { path: 'producto/:serie/edit', component: EditProductoComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
