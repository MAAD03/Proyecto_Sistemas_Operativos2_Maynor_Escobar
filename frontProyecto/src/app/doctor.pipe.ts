import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctor'
})
export class DoctorPipe implements PipeTransform {

 transform(value: number, doctorList:any[]): string {
    let e: any;
    for(e of doctorList){
      if(e.idDoctor == value){
        return e.nombreDoctor;
      }
    }
    return "No hay Informacion";
  }

}
