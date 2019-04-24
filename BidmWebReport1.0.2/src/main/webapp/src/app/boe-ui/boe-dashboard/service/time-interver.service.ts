import { Injectable } from '@angular/core';

@Injectable()
export class TimeInterverService {

  constructor() { }

  timeInterval(time, obj, i) {
    setInterval(() => {
      i += 1;
      obj = 'changed_' + i;

    }, time);
    // console.log(obj);
    // return obj;
  }

}
