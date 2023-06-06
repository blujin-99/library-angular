import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function customValidator(
    control: AbstractControl
    ):    Observable<any> | null {
    let value1 = control as FormControl ;
    let value3 = value1.value.trim();
    if (value3.length === 0) {
        control.setValue('');   
        return of({required: true})
        //return { customError: "Hay espeacios en blanco delante o tras" }; // Objeto de errores personalizado;
    }
   
    return of(null);
}






