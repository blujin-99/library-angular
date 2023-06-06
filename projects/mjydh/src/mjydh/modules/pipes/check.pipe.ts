import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {


verdadero:string  = `<i class="material-icons" >done</i>`

falso:string  = `<i class="material-icons" >remove</i>`

  transform(value: boolean): unknown {
      if(value){
        
        return this.verdadero;
      }
      return this.falso ;
  }

}
