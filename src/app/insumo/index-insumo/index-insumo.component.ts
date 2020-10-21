import { Component, OnInit } from '@angular/core';
import { InsumoService } from 'src/app/services/insumo.service';
import { InsumoInterface } from 'src/app/interface/insumo-interface';

@Component({
  selector: 'app-index-insumo',
  templateUrl: './index-insumo.component.html',
  styleUrls: ['./index-insumo.component.css']
})
export class IndexInsumoComponent implements OnInit {

  labels: any = {
    header: {
      title: 'INSUMOS',
      module: {
        name: 'Insumos',
        component: 'Indice'
      },
      subtitle: 'A continuación se mostrarán los insumos existentes. Para crear un nuevo insumo, se debe presionar el botón "Nuevo Insumo" (verde)'
    },
    create: 'Nuevo Insumo',
    id: 'ID',
    cdg: 'Código',
    color: 'Color',
    stock: 'Stock',
    tamanoCantidad: 'Tamaño / Cantidad',
    fchCreacion: 'Creado el',
    fchModificacion: 'Modificado el',
    activo: 'Activo',
    actions: {
      title: 'Acciones',
      edit: 'Editar',
      delete: 'Borrar'
    }
  };

  insumos: InsumoInterface[] = [];

  constructor(private insumoService: InsumoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  /**
   * Obtiene una lista de tipo insumo desde el servicio
   * "be-equipamiento" en la API
   */
  findAll() {
    this.insumoService.findAll().subscribe((data: InsumoInterface[]) => {
      this.insumos = data;
    })
  }

  /**
   * Borra el insumo seleccionado de la base de datos
   * y cuando termine filtra la tabla por todos los que no son
   * igual al identificador del registro que se borró
   * @param id Identificador del registro de la tabla CH_EQUIPAMIENTO.EQMT_INSUMOS
   */
  onDelete(id) {
    this.insumoService.delete(id).subscribe((res => {
      this.insumos = this.insumos.filter(insumo => insumo.id !== id);
    }));
  }
}
