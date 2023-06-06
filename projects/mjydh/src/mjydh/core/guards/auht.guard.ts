import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AppService } from '../services/app/app.service';

@Injectable({
  providedIn: 'root'
})


export class AuhtGuard  
{
  constructor(private authService: AppService )
  { }

  canActivate(route: ActivatedRouteSnapshot ): Observable<boolean> 
  {
    return this.hasRole(route);
  }

  canLoad(route:Route):Observable<boolean>
  {
    return this.hasRole(route);
  }

  private hasRole(route: Route | ActivatedRouteSnapshot)
  {
    let  profesion = route.data?.['informeProfesion'];
    if(route['url']['0']?.path === 'tramite'){
       if(route['url']['1']?.path === 'certificado'){
          profesion = route.data?.['certificadoProfesion'];
       }
     } 
    return this.authService.usuario().pipe(
      map((user)=>Boolean(user && profesion.includes(user.profesion.nombre))),
      tap((hasRole)=>hasRole === false && alert('No tiene Permiso') )
     );  
  }
}


export function hasRole(profesion: any ){
  
  return() => inject(AppService).usuario().pipe(
    map((user)=>Boolean(user && profesion.includes(user.profesion.nombre))),
    tap((hasRole)=>hasRole === false && alert('No tiene Permiso') )
  );
}