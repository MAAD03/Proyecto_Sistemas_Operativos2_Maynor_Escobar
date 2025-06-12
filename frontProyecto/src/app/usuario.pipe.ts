import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuario'
})
export class UsuarioPipe implements PipeTransform {

  transform(value: number, usuarioList:any[]): string {
    let e: any;
    for(e of usuarioList){
      if(e.idUsuario == value){
        return e.nombreUsuario;
      }
    }
    return "No hay Informacion";
  }

}
