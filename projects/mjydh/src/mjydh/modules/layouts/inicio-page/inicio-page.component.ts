import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuService } from '../../services/menu.service'
import { IMenuInicio } from '../../../core/Interfaces/generalInterfaces';


@Component({
  selector: 'app-inicio-page-mat',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css']
})
export class InicioPageComponent implements OnInit, OnDestroy {
 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  constructor(private breakpointObserver: BreakpointObserver,
              private route: ActivatedRoute,
              public inicioSrv: MenuService) {}
  
  menuInicio!:IMenuInicio[] ;
  title:string = "Nombre del Sistema Material"
   
  ngOnInit(): void {
    this.menuInicio= this.inicioSrv.getMenu();    
    if(this.inicioSrv.getTitleMenu()){
      this.title = this.inicioSrv.getTitleMenu();   
     } 
  }
  ngOnDestroy(): void {
    
  }

}
