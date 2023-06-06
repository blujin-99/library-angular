import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptor } from './core/interceptors/http-interceptor.interceptor';
import { BsErrorComponent } from './modules/errors/bs-error/bs-error.component';
import { MatErrorComponent } from './modules/errors//mat-error/mat-error.component';
import { FooterPageComponent } from './modules/layouts/footer-page/footer-page.component';
import { MaterialModule } from './modules/material/material.module';
import { BreadcrumbComponent } from './modules/layouts/breadcrumb/breadcrumb.component';
import { LayoutModule } from '@angular/cdk/layout';
import { InicioPageBsComponent } from './modules/layouts/inicio-page-bs/inicio.component';
import { InicioPageComponent } from './modules/layouts/inicio-page/inicio-page.component';
import { CheckPipe } from './modules/pipes/check.pipe';
const cargoComoponente =[
  FooterPageComponent, 
  BsErrorComponent,
  MatErrorComponent,
  InicioPageBsComponent,
  InicioPageComponent,
  
  
  
 ];

@NgModule({
  declarations: [
    ... cargoComoponente,
    CheckPipe,
    
  ],
  imports: [ 
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    BreadcrumbComponent,
    LayoutModule,
  ],
  exports:[
    ... cargoComoponente,
    MaterialModule,
  ],
  providers: [
    //{ provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
  ],
  
 
})
export class mjydhModule { }
