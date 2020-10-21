import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { IndexPersonalComponent } from './index-personal/index-personal.component';
import { ViewPersonalComponent } from './view-personal/view-personal.component';
import { CreatePersonalComponent } from './create-personal/create-personal.component';
import { EditPersonalComponent } from './edit-personal/edit-personal.component';


@NgModule({
  declarations: [IndexPersonalComponent, ViewPersonalComponent, CreatePersonalComponent, EditPersonalComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
