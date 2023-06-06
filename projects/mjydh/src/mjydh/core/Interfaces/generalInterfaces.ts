import { MatSnackBarHorizontalPosition } from "@angular/material/snack-bar"
import { MatSnackBarVerticalPosition } from "@angular/material/snack-bar"


export interface IInterceptor {
  tipo:'modal'|'toast',
  fondo:'light'|'success'|'danger'|'warning'|'primary'|'white',
  configToas:{verticalPosition:MatSnackBarVerticalPosition,horizontalPosition:MatSnackBarHorizontalPosition, panelClass:[string]} 
  configModal?:{width?:string, height?:string,  disableClose: boolean },
}
export interface IMenuInicio {
    nombre:string,
    url:string,
    link:string,
    icon:string,
    function:string,
    
  }


export interface IError{
    error:string,
    mensaje:string
  }
