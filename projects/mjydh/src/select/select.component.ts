import { Component, Input, Output, EventEmitter,forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),//podemos hacer referencia a un componente que todavía no se ha declarado
    multi: true
  }]
})

export class SelectComponent implements ControlValueAccessor {

  @Input() tipoOptions: any; //Array<selectorItems> = []; // array que trae del componente padre el id y nombre del elemento
  @Input() tipoTituloSelects: string = ""; // propiedad que trae el valor de un string como titulo del select en la opción deshabilitada
  @Input() ngvalue: string = "" //propiedad que especifica si [ngValue]="option" va a traer una sola propiedad, o un array de objetos

  @Output() change = new EventEmitter() //es el elemento padre que emite el valor de la opción seleccionada

  option: any
  
  
  getSelect() {
    this.option
    this.onTouch
    this.onChange(this.option)
    this.change.emit(this.option)
  }

  onChange = (value: any) => {
    this.option = value
  };
  onTouch = (_: any) => {

  };

  // escribe un valor en el elemento html
  writeValue(value: any): void {
    this.option = value
    this.onChange(this.option)
  }

  registerOnChange(fn: any): void { //registra los cambios de el valor de la opción seleccionada
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { // no recibe ningun valor solo lo registra si el elemento ha estado en focus (touched)
    this.onTouch = fn
  }
}
