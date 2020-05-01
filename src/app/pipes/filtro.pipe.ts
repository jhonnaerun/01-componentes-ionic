import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], filtro: string, columna: string): any[] {
    if (filtro !== undefined) {
      filtro = filtro.toLowerCase();
      arreglo = arreglo.filter(item => {
         return item[columna].toLowerCase().includes(filtro);
      });
    }
    console.log(arreglo.length);
    return arreglo;
  }

}
