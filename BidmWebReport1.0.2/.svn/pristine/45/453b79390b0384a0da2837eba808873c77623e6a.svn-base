import { Injectable } from '@angular/core';

@Injectable()
export class EtcService {

  constructor() { }

  // change object to querystring
  objectToQueryString(object: Object): String {

    const params = new URLSearchParams();
    const option = object;

    for ( const key in option ) {
      if ( option.hasOwnProperty(key) ) {
        params.set(key, option[key]);
      }
    }

    return params.toString();
  }

}
