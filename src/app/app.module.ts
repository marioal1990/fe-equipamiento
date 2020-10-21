import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//modulos
import { InsumoModule } from "./insumo/insumo.module";
import { PrestamoModule } from "./prestamo/prestamo.module";
import { ProductoModule } from "./producto/producto.module";
import { TpoProductoModule } from "./tpo-producto/tpo-producto.module";
import { PersonalModule } from "./personal/personal.module";

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MY_FORMATS  = {
  parse: { dateInput: 'DD/MM/YYYY' },
  display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'DD/MM/YYYY',
      monthYearA11yLabel: 'MM YYYY',
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    //modulos
    InsumoModule,
    PrestamoModule,
    ProductoModule,
    TpoProductoModule,
    PersonalModule,

    RouterModule,

    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
