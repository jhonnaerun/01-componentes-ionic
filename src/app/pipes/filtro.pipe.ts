import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  /**
   * pipe filtra el contenido segun la palabra a buscar  y el nombre del campo,
   * retornando el array donde existen coincidencias
   */
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
