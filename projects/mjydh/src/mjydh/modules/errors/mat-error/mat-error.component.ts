import { Component, Input } from '@angular/core';
import { FormControl, isFormArray } from '@angular/forms';
import { ErrorService } from '../services/error.service';
import { IError } from '../../../core/Interfaces/generalInterfaces';
@Component({
    selector: 'app-mat-error',
    templateUrl: './mat-error.component.html',
    styleUrls: ['./mat-error.component.css'],
})
export class MatErrorComponent {
    @Input() control!: any;
    @Input() getCampo!: string;
    mensaje: string = 'El campo es obligatorio';
    ERRORS: IError[];
    constructor(errorSrv: ErrorService) {
        this.ERRORS = errorSrv.getErrores();
    }

    /**
     *
     * @param campo nombre del campo que valida
     * @returns Mensaje de error
     */
    getCampoControl(campo: string): FormControl {
        let error = this.control.get(campo).errors;
        let valError;
        let add = '';
        if (error != null) {
            for (let errores in error) {
                valError = this.ERRORS.find(x => x.error == errores);
                if (errores == 'max') {
                    add = error.max.max;
                }
                if (errores == 'min') {
                    add = error.min.min;
                }
                if (errores == 'mask') {
                    add = error.mask.requiredMask;
                }
                if (!valError) {
                    valError = this.ERRORS.find(x => x.error == 'default');
                }
                this.mensaje = valError?.mensaje + add;
            }
        }

        return this.control.get(campo) as FormControl;
    }
}
