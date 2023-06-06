
import { Injectable , signal} from '@angular/core';
import { IInterceptor } from '../Interfaces/generalInterfaces';
@Injectable(
  {
    providedIn:'root'
  }
) 

/**
 * Configuraciones generales para el sistema 
 */






export class AppConfigService {

  configInterceptor:IInterceptor ={
     tipo:'modal', 
     fondo:'white',
     configToas:{verticalPosition:'top',horizontalPosition:'left', panelClass:['white-snackbar']}, 
     configModal:{width:'25rem', height:'8rem', disableClose: true }
  }
  
  showInterceptor= signal<boolean>(true);
  
 
  public titleMenu:string ="Nombre del Sistema"


}
