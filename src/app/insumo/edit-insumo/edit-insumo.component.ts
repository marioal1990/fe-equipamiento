import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsumoInterface } from 'src/app/interface/insumo-interface';
import { ProductoInterface } from 'src/app/interface/producto-interface';
import { TpoProductoInterface } from 'src/app/interface/tpo-producto-interface';
import { InsumoService } from 'src/app/services/insumo.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TpoProductoService } from 'src/app/services/tpo-producto.service';

@Component({
  selector: 'app-edit-insumo',
  templateUrl: './edit-insumo.component.html',
  styleUrls: ['./edit-insumo.component.css']
})
export class EditInsumoComponent implements OnInit {

  id: number;
  insumo: InsumoInterface;
  form: FormGroup;

  labels: any = {
    header: {
      title: 'INSUMOS',
      module: {
        name: 'Insumos',
        component: 'Actualizar Insumo'
      },
      subtitle: 'A continuación se mostrarán los datos del Insumo para modificar. Una vez editado los datos se debe presionar el botón "Guardar" (verde) para finalizar.'
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
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cdg: null,
      color: null,
      stock: null,
      tamanoCantidad: null,
      serieProducto: [null],
      idTpoProducto: [null],
    });
    this.findAllProductos();
    this.findAllTpoProductos();
    //SE RECUPERA DEL ENVIO POR routerLink[ruta, dataAEnviar, componente]
    this.id = this.route.snapshot.params['id'];
    //SE RECUPERA LOS DATOS DESDE LA BASE DE DATOS SEGÚN EL ID OBTENIDO ANTES
    this.insumoService.findById(this.id).subscribe((data: InsumoInterface) => {
      this.insumo = data;
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
    this.insumoService.update(this.form.value).subscribe(res => {
      this.router.navigateByUrl("insumo/index");
    })
  }

}
