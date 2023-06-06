import { Injectable } from '@angular/core';
import {IError} from '../../../core/Interfaces/generalInterfaces'


@Injectable({
  providedIn: 'root'
})

export class ErrorService {

  constructor() { }

 /**
   * Parametizacion de errores
   */
  ERRORS:IError[] = [
  { error: 'required', mensaje: "El Campo es Obligatorio" },
  { error: 'mask', mensaje: "El Campo debe tener el formato de: " },
  { error: 'min', mensaje: "El Campo debe ser Mayor a: " },
  { error: 'max', mensaje: "El Campo debe ser Menor a: " },
  { error: 'minlength', mensaje: "El Campo contiene Pocos Caracteres" },
  { error: 'maxlength', mensaje: "El Campo  contiene Muchos Caracteres" },
  { error: 'forbiddenName', mensaje: "El Campo contiene caractes prohibidos" },
  { error: 'pattern', mensaje: "El Patrón del Campo NO es correcto " },
  { error: 'default', mensaje: "El Campo no cumple las condiciones" },
]

getErrores():IError[]{
  return this.ERRORS;
}

}
