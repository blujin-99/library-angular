import { Component, Inject, Injectable, signal } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { AppConfigService } from '../config/app-config.service';
import { InterceptorService } from './services/interceptor.service';
import {
    MatSnackBar,
    MatSnackBarRef,
    MatSnackBarModule,
} from '@angular/material/snack-bar';
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogModule,
} from '@angular/material/dialog';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(
        public config: AppConfigService,
        public interceptorsrv: InterceptorService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog
    ) {}
    /* Solo la Utilizo para el snack */
    srvsnackBar: any = '';
    top: 'top' | 'bottom' = 'top';
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        /* cuando Intercepta llamada  */
        this.interceptorsrv.status.set(true);
        if (this.config.showInterceptor()) {
            if (this.config.configInterceptor.tipo == 'toast') {
                this.srvsnackBar = this.snackBar.openFromComponent(
                    SnackLoadingComponent,
                    this.config.configInterceptor.configToas
                );
            }

            if (this.config.configInterceptor.tipo == 'modal') {
                this.dialog.open(DialogDataLoading,
                this.config.configInterceptor.configModal
                );
            }
        }

        return next.handle(request).pipe(
            finalize(() => {
                /* Cuando Finaliza llamada  */
                this.interceptorsrv.status.set(false);
                this.dialog.closeAll();
                if (this.srvsnackBar != '') {
                    this.srvsnackBar.dismiss();
                }
            })
        ) as Observable<HttpEvent<any>>;
    }
}

@Component({
    selector: 'dialog-data-loading',
    templateUrl: 'modalLoading.component.html',
    standalone: true,
})
export class DialogDataLoading {
    constructor(public config: AppConfigService) {}
}

@Component({
    selector: 'snack-bar-loading',
    templateUrl: 'snackLoading.component .html',
    standalone: true,
})
export class SnackLoadingComponent {
    constructor(public config: AppConfigService) {}
    snackBarRef = MatSnackBarRef;
}
