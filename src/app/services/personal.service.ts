import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PersonalInterface } from '../interface/personal-interface';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private PATH_BE_EQUIPAMIENTO = 'http://localhost:8080/be-equipamiento/';
  private NAME_API = 'personal';
  private NAME_METHOD_UPDATE_ACTIVO = "deleteLogical";
  private NAME_METHOD_DELETE = "deletePhysical";
  private SLASH = '/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  /**
   * Método que Obtiene una lista de Personal desde la tabla CH_EQUIPAMIENTO.EQMT_PERSONALES
   * de la Base de Datos en el servicio "be-equipamiento"
   */
  findAll(): Observable<PersonalInterface[]> {
    return this.http
      .get<PersonalInterface[]>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API))
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Método que Obtiene un objeto Personal desde la tabla CH_EQUIPAMIENTO.EQMT_PERSONALES
   * de la Base de Datos en el servicio "be-equipamiento" por el Rut
   */
  findById(rut): Observable<PersonalInterface> {
    return this.http
      .get<PersonalInterface>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API).concat(this.SLASH).concat(rut))
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Método que ingresa un nuevo personal a la tabla CH_EQUIPAMIENTO.EQMT_PERSONALES
   * @param personal Objeto personal recolectado por los formularios
   */
  create(personal): Observable<PersonalInterface> {
    return this.http
      .post<PersonalInterface>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API), JSON.stringify(personal), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Método que ingresa un nuevo Personal a la tabla CH_EQUIPAMIENTO.EQMT_PERSONALES
   * @param personal Objeto personal recolectado por los formularios
   */
  update(personal): Observable<PersonalInterface> {
    return this.http
      .put<PersonalInterface>(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API), JSON.stringify(personal), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Método que borra un registro existente de la tabla CH_EQUIPAMIENTO.EQMT_PERSONALES por el RUT
   * @param rut Identificador Primario de la tabla CH_EQUIPAMIENTO.EQMT_PERSONALES
   * @param activo Refiere a si está el estado borrado logicamente o no
   */
  updateActivo(rut, activo): Observable<any> {
    return this.http
      .put(this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API).concat(this.SLASH).concat(this.NAME_METHOD_UPDATE_ACTIVO)
          .concat(rut)
          .concat(this.SLASH)
          .concat(activo), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Método que borra un registro existente de la tabla CH_EQUIPAMIENTO.EQMT_PERSONALES por el RUT
   * @param id Identificador Primario de la tabla CH_EQUIPAMIENTO.EQMT_PERSONALES
   */
  delete(rut): Observable<any> {
    return this.http
      .delete(
        this.PATH_BE_EQUIPAMIENTO.concat(this.NAME_API).concat(this.SLASH).concat(this.NAME_METHOD_DELETE)
          .concat(rut), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  /**
   * Captura error encontrado al realizar la operación http
   * @param error Error capturado
   */
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `ERROR CODE: ${error.status}\nERROR MESSAGE: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
