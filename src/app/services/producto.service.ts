import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductoInterface } from '../interface/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private PATH_BE_EQUIPAMIENTO = "http://localhost:8080/be-equipamiento/";
  private NAME_API = "producto";
  private NAME_METHOD_UPDATE_ACTIVO = "deleteLogical";
  private NAME_METHOD_DELETE = "deletePhysical";
  private SLASH = "/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  /**
   * Método que Obtiene una lista de Productos desde la tabla CH_EQUIPAMIENTO.EQMT_PRODUCTOS 
   * de la Base de Datos en el servicio "be-equipamiento"
   */
  findAll(): Observable<ProductoInterface[]> {
    return this.http
    .get<ProductoInterface[]>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API))
    .pipe(catchError(this.errorHandler))
  }

  /**
   * Método que Obtiene un objeto Producto desde la tabla CH_EQUIPAMIENTO.EQMT_PRODUCTOS POR SERIE
   * de la Base de Datos en el servicio "be-equipamiento" por la serie
   */
  findById(serie): Observable<ProductoInterface> {
    return this.http
    .get<ProductoInterface>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API).concat(this.SLASH).concat(serie))
    .pipe(catchError(this.errorHandler))
  }

  /**
   * Método que ingresa un nuevo Producto a la tabla CH_EQUIPAMIENTO.EQMT_PRODUCTOS
   * @param producto Objeto Producto recolectado por los formularios
   */
  create(producto): Observable<ProductoInterface> {
    return this.http
      .post<ProductoInterface>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API), JSON.stringify(producto), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Método que ingresa un nuevo Producto a la tabla CH_EQUIPAMIENTO.EQMT_PRODUCTOS
   * @param Producto Objeto Producto recolectado por los formularios
   */
  update(producto): Observable<ProductoInterface> {
    return this.http
      .put<ProductoInterface>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API), JSON.stringify(producto), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Método que borra un registro existente de la tabla CH_EQUIPAMIENTO.EQMT_PRODUCTOS por el SERIE
   * @param serie Identificador Primario de la tabla CH_EQUIPAMIENTO.EQMT_PRODUCTOS
   * @param activo Refiere a si está el estado borrado logicamente o no
   */
  updateActivo(serie, activo): Observable<any> {
    return this.http
      .put(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API).concat(this.SLASH).concat(this.NAME_METHOD_UPDATE_ACTIVO)
          .concat(serie)
          .concat(this.SLASH)
          .concat(activo), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Método que borra un registro existente de la tabla CH_EQUIPAMIENTO.EQMT_PRODUCTOS por el SERIE
   * @param serie Identificador Primario de la tabla CH_EQUIPAMIENTO.EQMT_PRODUCTOS
   */
  delete(serie): Observable<any> {
    return this.http
      .delete(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API).concat(this.SLASH).concat(this.NAME_METHOD_DELETE)
          .concat(serie), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Captura error encontrado al realizar la operación http
   * @param error Error capturado
   */
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `ERROR CODE: ${error.status}\nERROR MESSAGE: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
