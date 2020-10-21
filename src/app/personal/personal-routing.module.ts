import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPersonalComponent } from './index-personal/index-personal.component';
import { ViewPersonalComponent } from './view-personal/view-personal.component';
import { CreatePersonalComponent } from './create-personal/create-personal.component';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';
  
const routes: Routes = [
  { path: 'personal', redirectTo: 'personal/index', pathMatch: 'full'},
  { path: 'personal/index',     component: IndexPersonalComponent },
  { path: 'personal/:rut/view',  component: ViewPersonalComponent },
  { path: 'personal/create',    component: CreatePersonalComponent },
  { path: 'personal/:rut/edit',  component: EditPersonalComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
