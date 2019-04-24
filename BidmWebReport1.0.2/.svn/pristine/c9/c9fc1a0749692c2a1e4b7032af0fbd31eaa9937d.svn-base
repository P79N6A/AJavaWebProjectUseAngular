import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handlezero'
})
export class HandlezeroPipe implements PipeTransform {

  transform(value: any,args?: any): any {
    let res = '';
    if(args[0]-args[1] > 1){ // 这个处理是根据数据结构来的，很最关键
      res = '';
    }else{
      res = value;
    }
    return res;
  }

}
