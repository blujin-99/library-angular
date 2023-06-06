import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMenuInicio } from '../../../core/Interfaces/generalInterfaces';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-inicio-page-bs',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioPageBsComponent implements OnInit,OnDestroy {
  menuInicio!:IMenuInicio[] ;
  title:string = "Nombre del Sistema bootstrap"
  
  constructor(public inicioSrv:MenuService){

  }

  ngOnInit(): void {
    this.menuInicio = this.inicioSrv.getMenu(); 
    if(this.inicioSrv.getTitleMenu()){
     this.title = this.inicioSrv.getTitleMenu();   
    }
    
  }
  ngOnDestroy(): void {
    
  }
  

}
