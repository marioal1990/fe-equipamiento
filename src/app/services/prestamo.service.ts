import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PrestamoInterface } from '../interface/prestamo-interface';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private PATH_BE_EQUIPAMIENTO = "http://localhost:8080/be-equipamiento/";
  private NAME_API = "prestamos";
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
   * Método que Obtiene una lista de Prestamos desde la tabla CH_EQUIPAMIENTO.EQMT_PRESTAMOS 
   * de la Base de Datos en el servicio "be-equipamiento"
   */
  findAll(): Observable<PrestamoInterface[]> {
    return this.http
    .get<PrestamoInterface[]>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API))
    .pipe(catchError(this.errorHandler))
  }

  /**
   * Método que Obtiene un objeto Prestamos desde la tabla CH_EQUIPAMIENTO.EQMT_PRESTAMOS 
   * de la Base de Datos en el servicio "be-equipamiento" por el ID
   */
  findById(id): Observable<PrestamoInterface> {
    return this.http
    .get<PrestamoInterface>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API).concat(this.SLASH).concat(id))
    .pipe(catchError(this.errorHandler))
  }

  /**
   * Método que ingresa un nuevo Prestamos a la tabla CH_EQUIPAMIENTO.EQMT_PRESTAMOS 
   * @param prestamo Objeto insumo recolectado por los formularios
   */
  create(prestamo): Observable<PrestamoInterface> {
    return this.http
    .post<PrestamoInterface>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API), JSON.stringify(prestamo), this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }

  /**
   * Método que ingresa un nuevo Prestamos a la tabla CH_EQUIPAMIENTO.EQMT_PRESTAMOS 
   * @param prestamo Objeto insumo recolectado por los formularios
   */
  update(prestamo): Observable<PrestamoInterface> {
    return this.http
    .put<PrestamoInterface>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API), JSON.stringify(prestamo), this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }

  /**
   * Método que borra un registro existente de la tabla CH_EQUIPAMIENTO.EQMT_PRESTAMOS por el ID
   * @param id Identificador Primario de la tabla CH_EQUIPAMIENTO.EQMT_PRESTAMOS
   * @param activo Refiere a si está el estado borrado logicamente o no
   */
  updateActivo(id, activo): Observable<any> {
    return this.http
      .put(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API).concat(this.SLASH).concat(this.NAME_METHOD_UPDATE_ACTIVO)
          .concat(id)
          .concat(this.SLASH)
          .concat(activo), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Método que borra un registro existente de la tabla CH_EQUIPAMIENTO.EQMT_PRESTAMOS por el ID
   * @param id Identificador Primario de la tabla CH_EQUIPAMIENTO.EQMT_PRESTAMOS
   */
  delete(id): Observable<any> {
    return this.http
      .delete(
        this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API).concat(this.SLASH).concat(this.NAME_METHOD_DELETE)
          .concat(id), this.httpOptions)
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
