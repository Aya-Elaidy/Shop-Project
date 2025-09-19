import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: number, ...limit: number[]): string {
    let reslut='';
  let valuee=value.toString();
    for(let i=0;i<valuee.length;i++){
        reslut += valuee[i];

      if((i+1)%4==0){
        reslut+='-'


      }
    }
    return reslut;

  }

}
