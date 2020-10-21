import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoInterface } from 'src/app/interface/producto-interface';
import { TpoProductoInterface } from 'src/app/interface/tpo-producto-interface';
import { InsumoService } from 'src/app/services/insumo.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TpoProductoService } from 'src/app/services/tpo-producto.service';

@Component({
  selector: 'app-create-insumo',
  templateUrl: './create-insumo.component.html',
  styleUrls: ['./create-insumo.component.css']
})
export class CreateInsumoComponent implements OnInit {

  form: FormGroup;

  labels: any = {
    header: {
      title: 'INSUMOS',
      module: {
        name: 'Insumos',
        component: 'Nuevo Insumo'
      },
      subtitle: 'A continuación se mostrarán los insumos existentes. Para crear un nuevo insumo, se debe presionar el botón "Nuevo Insumo" (verde)'
    },
    form: {
      label: {
        cdg: 'Código',
        color: 'Color',
        stock: 'Stock',
        tamanoCantidad: 'Tamaño / Cantidad',
        producto: 'Producto Asociado',
        tpoProducto: 'Tipo de Producto'
      },
      select: {
        productoDefault: 'Seleccione un Producto',
        tpoProductoDefault: 'Seleccione un Tipo de Producto'
      },
      button: {
        save: 'Guardar',
        back: 'Volver'
      }
    }
  };

  productos: ProductoInterface[] = [];
  tpoProductos: TpoProductoInterface[] = [];

  constructor(private insumoService: InsumoService, private productoService: ProductoService, 
    private tpoProductoService: TpoProductoService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.findAllProductos();
    this.findAllTpoProductos();
    this.form = this.fb.group({
      cdg: null,
      color: null,
      stock: null,
      tamanoCantidad: null,
      serieProducto: [null],
      idTpoProducto: [null],
    });
  }

  /**
   * Obtiene una lista de tipo productos desde el servicio
   * "be-equipamiento" en la API
   */
  findAllProductos() {
    this.productoService.findAll().subscribe((data: ProductoInterface[]) => {
      this.productos = data;
    })
  }

  /**
   * Obtiene una lista de tipo tipo productos desde el servicio
   * "be-equipamiento" en la API
   */
  findAllTpoProductos() {
    this.tpoProductoService.findAll().subscribe((data: TpoProductoInterface[]) => {
      this.tpoProductos = data;
    })
  }

  submit() {
    console.log(this.form.value);
    this.insumoService.create(this.form.value).subscribe(res => {
      this.router.navigateByUrl("insumo/index");
    })
  }

}
