import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../../core/config/app-config.service';
import { IMenuInicio } from '../../core/Interfaces/generalInterfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import {menu} from '../../core/mocks/generalmocks'
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public http:HttpClient, public appConfig:AppConfigService){

  }

  getMenu():IMenuInicio[]
  {
    return menu;
  }

  public getTitleMenu():string
  {
     return this.appConfig.titleMenu;
  }



  /** Ejemplo para usar interceptor */
  getValues():Observable<any>{
    return this.http.get('http://localhost/expedientes/public/index.php/api');
  }

}
